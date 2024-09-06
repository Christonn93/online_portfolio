import { cosmicApi } from "./axiosInstance";

export const fetchProjects = async () => {
 const bucketSlug = import.meta.env.VITE_BUCKET_SLUG;
 const readKey = import.meta.env.VITE_BUCKET_READ;

 if (!bucketSlug || !readKey) {
  throw new Error("Bucket slug or read key is missing from environment variables.");
 }

 try {
  const response = await cosmicApi.get(`/buckets/${bucketSlug}/objects`, {
   params: {
    pretty: true,
    query: JSON.stringify({ type: "projects" }),
    limit: 10,
    depth: 1,
    props: "slug,title,metadata",
    read_key: readKey,
   },
  });

  if (response.data && response.data.objects) {
   return response.data.objects;
  } else {
   throw new Error("Unexpected response structure.");
  }
 } catch (error) {
  console.error("Error fetching projects:", error);
  throw error;
 }
};
