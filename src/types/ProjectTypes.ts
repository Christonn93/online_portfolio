export type Project = {
    slug: string;
    title: string;
    metadata: {
     project_title: string;
     created_at: string;
     github_link: string;
     live_demo_link: string;
     project_image: {
      imgix_url: string;
     };
     project_description: string;
    };
  };