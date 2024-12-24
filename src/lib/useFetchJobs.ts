import { useQuery } from "@tanstack/react-query";
import { JobReal } from "../utils/types";

export function useFetchJobs() {
  return useQuery<JobReal[]>({
    queryKey: ["jobs"],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/jobs`);
      return await response.json();
    },
  });
}