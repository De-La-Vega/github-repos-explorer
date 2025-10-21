"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldLabel } from "@/components/ui/field";

export type SortOption = "stars" | "forks" | "updated";

type Props = {
  value: SortOption;
  onChangeAction: (value: SortOption) => void;
};

export function SortSelect({ value, onChangeAction }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
      <Field>
        <FieldLabel htmlFor="username">Sort by</FieldLabel>
        <Select
          value={value}
          onValueChange={(val: SortOption) => onChangeAction(val)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="stars">⭐ Stars</SelectItem>
            <SelectItem value="forks">🍴 Forks</SelectItem>
            <SelectItem value="updated">🕒 Updated</SelectItem>
          </SelectContent>
        </Select>
      </Field>
    </div>
  );
}
