import styled from "styled-components";

export const Pagination__wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1178px;
`;

export const Pagination = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const Pagination__block = styled.li`
  margin: 0 1px;
`;
export const Pagination__change_page = styled.div`
  cursor: pointer;
  display: block;
  padding: 10px 15px;
  border: 1px solid #999;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background: #009ee4;
  }
`;

export const Pagination__button = styled.button`
  cursor: pointer;
  display: block;
  padding: 10px 15px;
  border: 1px solid #999;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background: #c9caca;
  }
`;

export const Pagination__page_number = styled.span``;

// export const Pagination = styled.div``;
// export const Pagination = styled.div``;
// export const Pagination = styled.div``;
