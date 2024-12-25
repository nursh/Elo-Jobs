import { useQuery } from "@tanstack/react-query";
import { JobReal } from "../utils/types";

export function useFetchJob(id: string) {
  return useQuery<JobReal[]>({
    queryKey: ["job"],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/jobs?id=${id}`);
      return await response.json();
    },
  });
}