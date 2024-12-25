import { useQuery } from "@tanstack/react-query";
import { JobReal } from "../utils/types";

export function useJobForResume(resumeId: string, count: number = 10, filtered: boolean = false) {
  const urlExtra = filtered
    ? `/resume/${resumeId}/filtered/jobs?n=${count}`
    : `/resume/${resumeId}/jobs?n=${count}`;

  return useQuery<JobReal[]>({
    queryKey: ['jobsForResume', resumeId, count, filtered],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}${urlExtra}`);
      return await response.json();
    }
  })

}