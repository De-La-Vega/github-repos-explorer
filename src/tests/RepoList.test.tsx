import { render, screen } from "@testing-library/react";
import { RepoCard } from "@/components/RepoCard";
import { describe, it, expect } from "vitest";

describe("RepoCard", () => {
  it("renders repo name and stars", () => {
    render(
      <RepoCard
        repo={{
          id: 1,
          name: "test-repo",
          html_url: "https://github.com/test/test-repo",
          description: "Test repo",
          stargazers_count: 42,
          forks_count: 5,
          updated_at: new Date().toISOString(),
          language: "TypeScript",
        }}
      />
    );
    expect(screen.getByText("test-repo")).toBeInTheDocument();
    expect(screen.getByText("42")).toBeInTheDocument();
  });
});
