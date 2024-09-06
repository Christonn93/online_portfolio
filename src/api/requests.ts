import axios from "axios";

// Define types for responses
interface Metadata {
 category?: string;
 excerpt?: string;
 published_date?: string;
}

interface Post {
 title: string;
 slug: string;
 metadata: Metadata;
 created_at?: string;
 status?: string;
}

interface PostResponse {
 object: Post;
}

interface PostsResponse {
 objects: Post[];
}

interface SiteSettingsResponse {
 object: {
  metadata: any;
 };
}

const BUCKET_SLUG = import.meta.env.COSMIC_BUCKET_SLUG as string;
const READ_KEY = import.meta.env.COSMIC_READ_KEY as string;
const API_URL = `https://api.cosmicjs.com/v3/${BUCKET_SLUG}/objects`;

const axiosInstance = axios.create({
 baseURL: API_URL,
 headers: {
  Authorization: `Bearer ${READ_KEY}`,
 },
});

const is404 = (error: any): boolean => /not found/i.test(error.message);

export async function getPreviewPostBySlug(slug: string): Promise<Post | undefined> {
 try {
  const { data } = await axiosInstance.get<PostResponse>(`/findOne`, {
   params: { slug },
  });
  return data.object;
 } catch (error) {
  if (is404(error)) return undefined;
  throw error;
 }
}

export async function getAllPosts(preview: boolean, postType: string, postCount: number): Promise<Post[]> {
 try {
  const { data } = await axiosInstance.get<PostsResponse>(`/find`, {
   params: {
    type: postType,
    props: "title,slug,metadata.category,metadata.excerpt,metadata.published_date,created_at,status",
    limit: postCount,
    sort: "-created_at",
    status: preview ? "any" : "published",
    depth: 1,
   },
  });
  return data.objects;
 } catch (error) {
  if (is404(error)) return [];
  throw error;
 }
}

export async function getAllPostsWithSlug(): Promise<Post[]> {
 try {
  const { data } = await axiosInstance.get<PostsResponse>(`/find`, {
   params: {
    type: "posts",
    props: "title,slug,metadata,created_at",
   },
  });
  return data.objects;
 } catch (error) {
  if (is404(error)) return [];
  throw error;
 }
}

export async function getPostAndMorePosts(slug: string, preview: boolean): Promise<{ post?: Post; morePosts?: Post[] }> {
 try {
  const { data: postData } = await axiosInstance.get<PostResponse>(`/findOne`, {
   params: {
    slug,
    props: "slug,title,metadata,created_at,status",
    status: preview ? "any" : "published",
   },
  });

  const { data: moreObjectsData } = await axiosInstance.get<PostsResponse>(`/find`, {
   params: {
    type: "posts",
    props: "slug,title,metadata,created_at",
    status: preview ? "any" : "published",
   },
  });

  const morePosts = moreObjectsData.objects?.filter(({ slug: object_slug }) => object_slug !== slug).slice(0, 2);

  return {
   post: postData.object,
   morePosts,
  };
 } catch (error) {
  if (is404(error)) throw error;
  throw error;
 }
}

export async function getAllCategories(category: string): Promise<Post[]> {
 try {
  const { data } = await axiosInstance.get<PostsResponse>(`/find`, {
   params: {
    type: category,
    props: "title",
   },
  });
  return data.objects;
 } catch (error) {
  if (is404(error)) return [];
  throw error;
 }
}

export async function getPageBySlug(slug: string, props: string): Promise<Post | undefined> {
 try {
  const { data } = await axiosInstance.get<PostResponse>(`/findOne`, {
   params: {
    slug,
    props,
    depth: 1,
   },
  });
  return data.object;
 } catch (error) {
  if (is404(error)) return undefined;
  throw error;
 }
}

export async function getSiteSettings(): Promise<{ metadata: any } | undefined> {
 try {
  const { data } = await axiosInstance.get<SiteSettingsResponse>(`/findOne`, {
   params: {
    type: "site-settings",
    slug: "site-settings",
    props: "metadata",
   },
  });
  return data.object;
 } catch (error) {
  if (is404(error)) return undefined;
  throw error;
 }
}
