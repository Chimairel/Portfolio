import { useState, FormEvent } from "react";

function getInitialSearch() {
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    return params.get("search") || "";
  }
  return "";
}

export function useDirectory<T>(
  dataArray: T[], 
  itemsPerPage: number, 
  filterLogic: (item: T, searchKey: string) => boolean
) {
  const [searchInput, setSearchInput] = useState(getInitialSearch);
  const [activeSearch, setActiveSearch] = useState(getInitialSearch);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = dataArray.filter((item) => filterLogic(item, activeSearch));

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setActiveSearch(searchInput);
    setCurrentPage(1);
  };

  return {
    searchInput,
    setSearchInput,
    currentPage,
    setCurrentPage,
    totalPages,
    currentItems,
    totalItemsFound: filteredData.length,
    handleSearch,
  };
}