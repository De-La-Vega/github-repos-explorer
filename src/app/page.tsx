"use client";
import { useState, useMemo } from "react";
import { useGithubRepos } from "@/hooks/useGithubRepos";
import { SearchBar } from "@/components/SearchBar";
import { RepoCard } from "@/components/RepoCard";
import { SortSelect, SortOption } from "@/components/SortSelect";

export default function Page() {
  const [username, setUsername] = useState("");
  const [sort, setSort] = useState<SortOption>("stars");
  const { data, isLoading, isError } = useGithubRepos(username);

  const sorted = useMemo(() => {
    if (!data) return [];
    return [...data].sort((a, b) => {
      switch (sort) {
        case "stars":
          return b.stargazers_count - a.stargazers_count;
        case "forks":
          return b.forks_count - a.forks_count;
        case "updated":
          return (
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          );
        default:
          return 0;
      }
    });
  }, [data, sort]);

  return (
    <main className="min-h-screen p-8 space-y-6 bg-gray-50">
      <h1 className="text-2xl font-bold text-center">GitHub Repos Explorer</h1>

      <SearchBar onSearchAction={setUsername} isLoading={isLoading} />

      {data && data.length > 0 && (
        <SortSelect value={sort} onChangeAction={setSort} />
      )}

      {isLoading && <p className="text-center">Loading...</p>}
      {isError && <p className="text-center text-red-500">User not found</p>}

      {!isLoading && !isError && username && data && data.length === 0 && (
        <p className="text-center text-gray-500">
          This user has no public repositories.
        </p>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sorted.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </main>
  );
}
