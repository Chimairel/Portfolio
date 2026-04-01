import { useState, FormEvent, useEffect } from "react";

export function useDirectory<T>(
  dataArray: T[], 
  itemsPerPage: number, 
  filterLogic: (item: T, searchKey: string) => boolean
) {
  const [searchInput, setSearchInput] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const search = searchParams.get("search");
      if (search) {
        setSearchInput(search);
        setActiveSearch(search);
        setCurrentPage(1);
      }
    }
  }, []);

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