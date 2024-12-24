import { useEffect } from 'react';
import '../assets/styles/Pagination.css';
import usePagination from "../lib/usePagination"

type Props<T> = {
  data: T[];
  limit: number;
  setPageData: (data: T[]) => void;
}

export default function Pagination<T>({ data, limit, setPageData }: Props<T>) {

  const {
    previousPage,
    nextPage,
    pageNumber,
    pageCount,
    pageData
  } = usePagination(data, limit);

  useEffect(() => {
    setPageData(pageData())
  }, [pageNumber]);

  return (
    <div className="pagination">
      <button onClick={previousPage}>Previous</button>
      <p>Page: {pageNumber} of {pageCount} pages</p>
      <button onClick={nextPage}>Next</button>
    </div>
  )
}