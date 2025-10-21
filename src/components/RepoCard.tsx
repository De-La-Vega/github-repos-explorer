import { Repo } from "@/types/github";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, GitFork } from "lucide-react";

export function RepoCard({ repo }: { repo: Repo }) {
  return (
    <Card className="hover:shadow-md transition">
      <CardHeader>
        <CardTitle>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {repo.name}
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-gray-600">
        <p>{repo.description || "No description"}</p>

        <div className="flex gap-4 mt-2 mb-2">
          <span className="flex items-center gap-1">
            <Star size={16} /> {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1">
            <GitFork size={16} /> {repo.forks_count}
          </span>
          <span>{repo.language}</span>
        </div>
      </CardContent>
    </Card>
  );
}
