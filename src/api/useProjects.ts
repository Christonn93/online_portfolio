import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "./axiosRequests";

export const useProjects = () => {
    return useQuery({
      queryKey: ['projects'],
      queryFn: fetchProjects,
    });
  };

