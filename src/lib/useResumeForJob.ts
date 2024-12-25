import { useQuery } from "@tanstack/react-query";
import { UserReal } from "../utils/types";

export function useResumeForJob(jobId: string, count: number = 10, filtered: boolean = false) {

  const urlExtra = filtered
    ? `/job/${jobId}/filtered/resumes?n=${count}`
    : `/job/${jobId}/resumes?n=${count}`
     

  return useQuery<UserReal[]>({
    queryKey: ['resumeForJob'],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}${urlExtra}`);
      return await response.json();
    }
  });
}