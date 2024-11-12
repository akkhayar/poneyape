"use client";

import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDebounce } from "@/hooks/useDebounce";

export default function WebsiteListFilter({
  onChange,
}: {
  onChange: ({ q, tag }: { q: string; tag: string }) => void;
}) {
  const [q, setQ] = useState<string>("");
  const [tag, setTag] = useState<string>("");

  const debouncedSearch = useDebounce(q, 1000);

  useEffect(() => {
    onChange({ q: debouncedSearch || "", tag: tag || "" });
  }, [debouncedSearch, tag, onChange]);

  return (
    <div>
      <div className="mb-5 flex justify-between">
        <div className="flex items-center gap-5">
          <div className="space-y-2">
            <Label className="text-lg">Search</Label>
            <Input
              type="text"
              placeholder="Search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white p-2"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-lg">Tag</Label>
            <Select onValueChange={setTag}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Tag" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Blog">Blog</SelectItem>
                <SelectItem value="ui">UI</SelectItem>
                <SelectItem value="mobile">Mobile</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
