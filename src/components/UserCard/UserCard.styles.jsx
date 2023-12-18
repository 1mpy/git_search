import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const User = styled.div`
  width: 270px;
  height: 441px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const Avatar = styled.div`
  width: 270px;
  height: 270px;
  background-color: #f0f0f0;
  &:hover {
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;

export const User__photo = styled.img``;

export const User__content = styled.div``;

export const User__name = styled.p`
  color: #000000;
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  margin-bottom: 10px;
`;

export const User__repos = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
`;

export const User__profile = styled.a`
  cursor: pointer;
  height: 52px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #009ee4;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    color: #0080c1;
  }
`;

export const Info = styled.div``;
