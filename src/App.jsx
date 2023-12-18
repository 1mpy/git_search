import { useState } from "react";
import "./App.css";
import * as S from "./App.styles";
import { findUsers } from "./api/api";
import UserCard from "./components/UserCard/UserCard";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const [page, setPage] = useState(1);
  const [per_page, setPerPage] = useState(10);
  const [totalUsers, setTotalUsers] = useState("");
  const [order, setOrder] = useState("");
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const inputHandler = (e) => setSearch(e.target.value);
  const searchUsers = (orderType) => {
    setOrder(orderType);
    let newOrder = order;
    if (orderType) newOrder = orderType;
    findUsers(page, per_page, search, newOrder)
      .then((data) => {
        setUsers(data.items);
        setTotalUsers(data.total_count);
        setError("");
      })
      .catch((err) => {
        console.log("err", err.message);
        setError(err.message);
      });
  };

  const paginate = (pageNumber) => {
    setPage(pageNumber);
    findUsers(pageNumber, per_page, search, order)
      .then((data) => {
        setUsers(data.items);
        setTotalUsers(data.total_count);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="App">
      <S.Main>
        <S.Main__search>
          <S.Main__header>Поиск пользователей GitHub</S.Main__header>
          <S.Search__form onSubmit={(e) => e.preventDefault()}>
            <S.Search__text
              value={search}
              onInput={inputHandler}
              placeholder="Поиск пользователей"
            ></S.Search__text>
            <S.Search__btn onClick={searchUsers}>Найти</S.Search__btn>
          </S.Search__form>
        </S.Main__search>
        <S.Error>{error}</S.Error>
        <S.Main__container>
          {users.length > 0 ? (
            <>
              <S.Main__header>Найденные пользователи</S.Main__header>
              <S.Main__sortbox>
                <S.Order__type>Сортировка по:</S.Order__type>
                <S.Order onClick={() => searchUsers("desc")}>
                  возрастанию
                </S.Order>
                <S.Order onClick={() => searchUsers("asc")}>убыванию</S.Order>
              </S.Main__sortbox>

              <S.Main__content>
                <S.Content__usercards>
                  {users?.map((user, index) => (
                    <UserCard key={index} user={user} />
                  ))}
                </S.Content__usercards>
                <Pagination
                  per_page={per_page}
                  users={totalUsers}
                  paginate={paginate}
                  setPage={setPage}
                  page={page}
                />
              </S.Main__content>
            </>
          ) : (
            <></>
          )}
        </S.Main__container>
      </S.Main>
    </div>
  );
}

export default App;

// https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Pagination

//при пустом поле запрос не выполняется
//при запрос на русском языке выдать ошибку?
