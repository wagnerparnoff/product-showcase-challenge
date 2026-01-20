import { useState, useMemo, useEffect } from "react";
import useViewport from "./useViewport";

export function usePagination(data) {
  const { width } = useViewport();
  const itemsPerPage = width >= 1024 ? 6 : width >= 640 ? 4 : 3;

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  const currentItems = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, itemsPerPage, data]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const changePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    currentItems,
    currentPage,
    totalPages,
    changePage
  };
}

export default usePagination;
