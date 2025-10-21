import { useQuery } from "@tanstack/react-query";
import { fetchUserRepos } from "@/lib/github";
import { Repo } from "@/types/github";

export function useGithubRepos(username: string) {
  return useQuery<Repo[]>({
    queryKey: ["repos", username],
    queryFn: () => fetchUserRepos(username),
    enabled: !!username,
  });
}
