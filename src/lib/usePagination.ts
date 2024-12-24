import { useState } from "react";

export default function usePagination<T>(data: T[], limit: number) {

  const [pageNumber, setPageNumber] = useState(0);
  const pageCount = Math.ceil(data.length / limit);
  console.log(data.length)
  
  const changePage = (page: number) => {
    setPageNumber(page);
  }

  const nextPage = () => {
    setPageNumber(Math.min(pageNumber + 1, pageCount - 1));
  };

  const previousPage = () => {
    setPageNumber(Math.max(pageNumber - 1, 0));
  };

  const pageData = () => {
    const start = pageNumber * limit;
    const end = start + limit;
    return data.slice(start, end);
  }

  return {
    pageNumber,
    pageCount,
    changePage,
    pageData,
    nextPage,
    previousPage
  }
}