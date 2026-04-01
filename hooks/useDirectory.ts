import { useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";

export function useDirectory<T>(
  dataArray: T[], 
  itemsPerPage: number, 
  filterLogic: (item: T, searchKey: string) => boolean
) {
  const searchParams = useSearchParams();
  const urlSearch = searchParams.get("search") || "";

  const [searchInput, setSearchInput] = useState(urlSearch);
  const [activeSearch, setActiveSearch] = useState(urlSearch);
  const [currentPage, setCurrentPage] = useState(1);

  const [prevUrlSearch, setPrevUrlSearch] = useState(urlSearch);
  if (urlSearch !== prevUrlSearch) {
    setPrevUrlSearch(urlSearch);
    setSearchInput(urlSearch);
    setActiveSearch(urlSearch);
    setCurrentPage(1);
  }

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