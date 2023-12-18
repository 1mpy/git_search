import React, { useEffect, useState } from "react";
import * as S from "./UserCard.styles";

function UserCard({ user }) {
  const [isClicked, setIsClicked] = useState(false);
  const [repos, setRepos] = useState();

  useEffect(() => {
    if (isClicked && !repos)
      fetch(user?.repos_url)
        .then((data) => data.json())
        .then((reposData) => {
          setRepos(reposData.length);
        });
  }, [isClicked]);
  return (
    <S.User>
      <S.Avatar onClick={() => setIsClicked(!isClicked)}>
        <S.User__photo src={user.avatar_url} />
      </S.Avatar>
      <S.User__content>
        <S.User__name>{user?.login}</S.User__name>
        <S.Info style={{ visibility: isClicked ? "visible" : "hidden" }}>
          <S.User__repos>Репозитории:{repos}</S.User__repos>
          <S.User__profile href={user?.html_url}>Профиль</S.User__profile>
        </S.Info>
      </S.User__content>
    </S.User>
  );
}

export default UserCard;
