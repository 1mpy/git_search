import { useState } from "react";
import * as S from "./Pagination.styles";
import { PaginationControl } from "react-bootstrap-pagination-control";
import "bootstrap/dist/css/bootstrap.min.css";

function Pagination({ per_page, users, paginate }) { 
  const [page, setPage] = useState(1)
  return (
    <PaginationControl
      page={page}
      between={4}
      total={users / per_page}
      limit={10}
      changePage={(page) => {
        setPage(page);
        paginate(page)
      }}
      ellipsis={1}
    />

  );
}

export default Pagination;
