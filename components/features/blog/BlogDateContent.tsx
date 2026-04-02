"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RetroWindow } from "@/components/common/RetroWindow";
import { DirectorySearch } from "@/components/common/DirectorySearch";
import { DirectoryPagination } from "@/components/common/DirectoryPagination";
import { useDirectory } from "@/hooks/useDirectory";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

interface BlogDateContentProps {
  segments: string[];
  filteredPosts: BlogPost[];
  year?: string;
  month?: string;
  day?: string;
}

export function BlogDateContent({ filteredPosts, year, month, day }: BlogDateContentProps) {
  const router = useRouter();
  
  const { searchInput, setSearchInput, currentPage, setCurrentPage, totalPages, currentItems, totalItemsFound, handleSearch } = useDirectory(
    filteredPosts,                    
    2,                           
    (post, search) => 
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      post.date.toLowerCase().includes(search.toLowerCase())
  );

  const customHandleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedInput = searchInput.trim();
    const datePattern = /^\d{2,4}(\/\d{1,2})?(\/\d{1,2})?$/;
    
    if (datePattern.test(trimmedInput)) {
      router.push(`/blog/date/${trimmedInput}`);
    } else if (trimmedInput === "" || trimmedInput.toLowerCase() === "root") {
      router.push(`/blog/date`);
    } else {
      handleSearch(e);
    }
  };

  const formattedPathTokens = [year, month, day].filter(Boolean);
  const titleDateStr = formattedPathTokens.length > 0 ? formattedPathTokens.join("/") : " ? ";
  const directoryPathStr = formattedPathTokens.length > 0 ? formattedPathTokens.join("\\") + "\\" : "";

  return (
    <RetroWindow title={`Date_[${titleDateStr}].exe`} id="blog-date">
      
      <div className="bg-muted p-4 mb-6 border-2 border-border shadow-[4px_4px_0px_0px_var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
           <div className="bg-foreground text-background p-3 border-2 border-foreground hidden sm:flex items-center justify-center aspect-square shadow-[2px_2px_0px_0px_var(--color-border)]">
             <Calendar className="w-8 h-8" />
           </div>
           <div>
             <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest text-foreground">
               TEMPORAL ARCHIVE
             </h2>
             <p className="font-mono text-[10px] sm:text-xs text-muted-foreground mt-1 mb-1">
               Navigate the timeline by appending URL segments or searching formats like <strong className="text-foreground">YYYY/MM/DD</strong> or <strong className="text-foreground">YY/M/D</strong>.
             </p>
             <p className="font-mono text-xs text-foreground mt-1 font-bold">
               &gt; SERVER PARAMS: YEAR={year || "NULL"} | MONTH={month || "NULL"} | DAY={day || "NULL"}
             </p>
           </div>
        </div>
        <Link 
           href="/blog"
           className="bg-card text-foreground px-4 py-2 font-mono font-bold uppercase border-2 border-border hover:bg-muted shadow-[2px_2px_0px_0px_var(--color-border)] transition-colors whitespace-nowrap"
        >
           [ RETURN TO PRESENT ]
        </Link>
      </div>

      <div className="-mb-3"> 
        <DirectorySearch 
          path={`C:\\Chimairel\\Blog\\Archive\\${directoryPathStr}`}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleSearch={customHandleSearch}
          resultCount={totalItemsFound}
          placeholder="search date: e.g 26/3/10"
        />
      </div>

      <div className="flex flex-col gap-4"> 
        {currentItems.length > 0 ? (
          currentItems.map((post) => (
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
          ))
        ) : (
          <div className="py-12 text-center font-mono text-muted-foreground border-2 border-dashed border-border flex flex-col items-center gap-2">
            <span>&gt; ERROR 404: No transmission logs found for temporal parameter: /{titleDateStr}</span>
            <Link href="/blog/date" className="underline hover:text-foreground mt-2">Return to Archive Root</Link>
          </div>
        )}
      </div>

      <div className="mt-2">
        <DirectoryPagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
      </div>

    </RetroWindow>
  );
}