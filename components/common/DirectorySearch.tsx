"use client";

import { FormEvent } from "react";
import {
  RetroDropdown,
  RetroDropdownContent,
  RetroDropdownItem,
  RetroDropdownTrigger,
} from "@/components/common/RetroDropdown";

interface DirectorySearchProps {
  path: string;
  searchInput: string;
  setSearchInput: (value: string) => void;
  handleSearch: (e: FormEvent<HTMLFormElement>) => void;
  resultCount: number;
  placeholder?: string;
  buttonText?: string;
  itemLabel?: string;
  filterVariant?: "category" | "date";
  filterOptions?: { name: string; slug: string }[];
  selectedFilterOption?: string;
  onFilterChange?: (slug: string) => void;
  defaultFilterLabel?: string;
  extraActions?: React.ReactNode;
}

export function DirectorySearch({
  path,
  searchInput,
  setSearchInput,
  handleSearch,
  resultCount,
  placeholder = "search...",
  buttonText = "Find",
  itemLabel = "Items Found",
  filterVariant,
  filterOptions,
  selectedFilterOption,
  onFilterChange,
  defaultFilterLabel = "ALL ITEMS",
  extraActions
}: DirectorySearchProps) {
  
  const activeOptionName = selectedFilterOption === "all" || !selectedFilterOption
    ? defaultFilterLabel
    : filterOptions?.find(c => c.slug === selectedFilterOption)?.name || defaultFilterLabel;

  return (
    <div className="mb-8 border-b-2 border-border pb-6 flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 w-full">
        
        <div className="flex flex-col sm:flex-row items-stretch gap-4 flex-1 max-w-4xl">
          
          <form onSubmit={handleSearch} className="flex flex-1 items-stretch font-mono text-sm shadow-[2px_2px_0px_0px_var(--color-border)]">
            <div className="hidden sm:flex items-center bg-muted border-2 border-border border-r-0 px-3 text-muted-foreground whitespace-nowrap">
              &gt; PATH: {path}
            </div>
            
            <input 
              type="text" 
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder={placeholder}
              className="flex-1 bg-card text-foreground border-2 border-border border-r-0 px-3 py-2 outline-none focus:bg-muted transition-colors w-full min-w-[100px]"
            />

            <button 
              type="submit"
              className="bg-foreground text-background font-bold px-4 border-2 border-foreground hover:opacity-90 active:translate-y-[1px] transition-all uppercase tracking-widest cursor-pointer"
            >
              {buttonText}
            </button>
          </form>

          {filterVariant && filterOptions && onFilterChange && (
            <RetroDropdown>
              <RetroDropdownTrigger asChild>
                <button 
                  type="button" 
                  className="bg-card text-foreground border-2 border-border px-4 py-2 outline-none focus:bg-muted font-mono uppercase font-bold cursor-pointer shadow-[2px_2px_0px_0px_var(--color-border)] min-w-[160px] flex justify-between items-center gap-3 transition-colors hover:bg-muted"
                >
                  <span className="truncate">{activeOptionName}</span>
                  <span className="text-[10px] opacity-70">▼</span>
                </button>
              </RetroDropdownTrigger>
              
              <RetroDropdownContent>
                <RetroDropdownItem onClick={() => onFilterChange("all")}>
                  {defaultFilterLabel}
                </RetroDropdownItem>
                
                {filterOptions.map((opt) => (
                  <RetroDropdownItem 
                    key={opt.slug}
                    onClick={() => onFilterChange(opt.slug)}
                  >
                    {opt.name}
                  </RetroDropdownItem>
                ))}
              </RetroDropdownContent>
            </RetroDropdown>
          )}
          {extraActions}

        </div>

        {/* Right Side: Log Count */}
        <span className="bg-foreground text-background px-3 py-1 font-mono font-bold text-sm w-fit tracking-widest uppercase whitespace-nowrap lg:self-stretch flex items-center shadow-[2px_2px_0px_0px_var(--color-border)]">
          {resultCount} {itemLabel}
        </span>
        
      </div>
    </div>
  );
}