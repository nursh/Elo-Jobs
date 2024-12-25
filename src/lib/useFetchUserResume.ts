import { useQuery } from '@tanstack/react-query';
import { UserReal } from '../utils/types';

export function useFetchUserResume(id: string) {
  return useQuery<UserReal[]>({
    queryKey: ['userResume'],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/resumes?id=${id}`);
      return await response.json();
    }
  });
}