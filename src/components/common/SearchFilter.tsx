"use client";

import { parseAsArrayOf, useQueryState } from "nuqs";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Tag from "./Tag";

export default function SearchFilter() {
  const [query, setQuery] = useQueryState("q");
  const [filter, setFilter] = useQueryState("filter");
  console.log(filter);

  return (
    <div>
      <div className="mb-5 flex justify-between">
        <div className="flex items-center gap-5">
          <Input
            type="text"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-md border border-gray-300 p-2"
          />
          <button>Filters</button>
        </div>

        <button>Sort By</button>
      </div>
      <div className="flex justify-between">
        <Tag tag="test" clickable={true} />
        <p>Showing 0 of 100</p>
      </div>
    </div>
  );
}
