"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RetroWindow } from "@/components/common/RetroWindow";
import { DirectorySearch } from "@/components/common/DirectorySearch";
import { DirectoryPagination } from "@/components/common/DirectoryPagination";
import { blogData, BLOG_CATEGORIES } from "@/constants/blog";
import { useDirectory } from "@/hooks/useDirectory";

export function BlogFeed() {
  const router = useRouter();

  const { searchInput, setSearchInput, currentPage, setCurrentPage, totalPages, currentItems, totalItemsFound, handleSearch } = useDirectory(
    blogData,
    2, // Blogs per page
    (post, search) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      post.date.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <RetroWindow title="blog_feed.exe" id="blog-main">
        <div className="-mb-3">
          <DirectorySearch
            path="C:\Chimairel\Blog\"
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            handleSearch={handleSearch}
            resultCount={totalItemsFound}
            placeholder="search_posts..."
            buttonText="Query"
            itemLabel="Logs Found"
            categories={BLOG_CATEGORIES}
            selectedCategory="all"
            onCategoryChange={(val) => {
              if (val !== "all") router.push(`/blog/category/${val}`);
            }}
            extraActions={
              <Link 
                href="/blog/date"
                className="bg-card text-foreground border-2 border-border px-3 py-2 outline-none focus:bg-muted cursor-pointer shadow-[2px_2px_0px_0px_var(--color-border)] flex justify-center items-center transition-all hover:bg-muted hover:-translate-y-[1px] active:translate-y-[1px] group flex-shrink-0"
                title="Time Machine (Search by Date)"
              >
                <Calendar className="w-5 h-5 group-hover:rotate-6 transition-transform" />
                <span className="sr-only">Date Archive</span>
              </Link>
            }
          />
        </div>

        <div className="flex flex-col gap-4">
          {currentItems.map((post) => (
            <div key={post.id} className="flex flex-col md:flex-row border-2 border-border bg-card group">
              <div className="relative w-full md:w-1/4 aspect-video md:aspect-auto border-b-2 md:border-b-0 md:border-r-2 border-border bg-muted flex-shrink-0 overflow-hidden">
                <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover" />
              </div>
              <div className="p-4 flex flex-col flex-grow justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1.5">
                    <span className="bg-foreground text-background px-1.5 py-0.5">{post.category}</span>
                    <span className="text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold tracking-tight mb-1 text-foreground leading-tight">{post.title}</h3>
                  <p className="text-sm font-medium text-muted-foreground leading-snug line-clamp-2">{post.excerpt}</p>
                </div>
                <div className="mt-1">
                  <Button variant="outline" size="sm" className="h-8 text-xs px-3" asChild>
                    <Link href={`/blog/${post.slug}`}>Read Article</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2">
          <DirectoryPagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
        </div>
      </RetroWindow>
    </>
  );
}
