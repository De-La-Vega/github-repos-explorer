"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Search } from "lucide-react";

type Props = {
  onSearchAction: (username: string) => void;
  isLoading?: boolean;
};

export function SearchBar({ onSearchAction, isLoading }: Props) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    onSearchAction(value.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 w-full max-w-md mx-auto items-center"
    >
      <Input
        placeholder="Enter GitHub username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1"
        disabled={isLoading}
      />
      <Button
        type="submit"
        disabled={!value.trim() || isLoading}
        className="min-w-[100px]"
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
        ) : (
          <Search className="h-4 w-4 mr-2" />
        )}
        Search
      </Button>
    </form>
  );
}
