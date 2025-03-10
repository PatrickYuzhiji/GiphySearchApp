import React, { useContext } from 'react';
import { Pagination } from 'react-bootstrap';
import PageContext from '../contexts/PageContext';

function Pager() {
  const [page, setPage] = useContext(PageContext);

  const prevPage = () => {
    setPage((prev) => Math.max(prev - 1, 0));
  };

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <Pagination>
      <Pagination.Prev disabled={page === 0} onClick={prevPage} />
      <Pagination.Item active>{page + 1}</Pagination.Item>
      <Pagination.Next onClick={nextPage} />
    </Pagination>
  );
}

export default Pager;
