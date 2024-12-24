import { useQuery } from '@tanstack/react-query';
import { UserReal } from '../utils/types';

export function useFetchUserProfiles() {
  return useQuery<UserReal[]>({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/resumes`);
      return await response.json();
    }
  });
}