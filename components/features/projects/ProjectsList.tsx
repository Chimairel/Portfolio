"use client"; 

import { useState, useMemo } from "react";
import { RetroWindow } from "@/components/common/RetroWindow";
import { DirectorySearch } from "@/components/common/DirectorySearch";
import { DirectoryPagination } from "@/components/common/DirectoryPagination";
import { ProjectCard } from "@/components/features/projects/ProjectCard";
import { projectsData } from "@/constants/projects";
import { useDirectory } from "@/hooks/useDirectory";

export function ProjectsList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(projectsData.map(p => p.category)))];

  const filteredData = useMemo(() => {
    if (selectedCategory === "All") return [...projectsData].reverse();
    return [...projectsData].reverse().filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const {
    searchInput, setSearchInput, currentPage, setCurrentPage,
    totalPages, currentItems, totalItemsFound, handleSearch
  } = useDirectory(
    filteredData,
    2,
    (project, search) =>
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <RetroWindow title="Projects_Directory" id="projects-main">
          
      <DirectorySearch 
        path="C:/Chimairel/projects/"
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
        resultCount={totalItemsFound}
        placeholder="search_project..."
        buttonText="Find"
        itemLabel="Items Found"
        filterVariant="category"
        filterOptions={categories.filter(c => c !== "All").map(c => ({ name: c, slug: c }))}
        selectedFilterOption={selectedCategory === "All" ? "all" : selectedCategory}
        defaultFilterLabel="ALL PROJECTS"
        onFilterChange={(val) => {
          setSelectedCategory(val === "all" ? "All" : val);
          setCurrentPage(1);
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {currentItems.length > 0 ? (
          currentItems.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="col-span-full py-12 text-center font-mono text-muted-foreground">
            &gt; ERROR 404: No projects match your search parameters.
          </div>
        )}
      </div>

      <DirectoryPagination 
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />

    </RetroWindow>
  );
}