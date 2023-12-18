import styled from "styled-components";

export const Main = styled.main``;

export const Main__search = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 11px 0;
  max-width: 1178px;
  margin: 0 auto;
  padding: 31px 10px 0px;
`;

export const Search__form = styled.form`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`;

export const Search__text = styled.input`
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: transparent;
  padding: 13px 19px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  &::-webkit-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  &:-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  &::-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Search__btn = styled.button`
  cursor: pointer;
  margin-left: 10px;
  width: 158px;
  height: 50px;
  background-color: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  &:hover {
    background: #0080c1;
  }
`;

export const Main__container = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 52px 10px 37px;
`;

export const Main__header = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;
  :hover::before {
    border-top: 2px solid #0080c1;
    border-left: 2px solid #0080c1;
  }
`;

export const Main__sortbox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`;
export const Main__content = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 10px;
`;

export const Content__usercards = styled.div`
  max-width: 1158px;
  width: 100%;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (270px) [4];
  grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 40px 26px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;
`;

export const Order__type = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
`;

export const Order = styled.h3`
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 24px;
  color: #000000;
  &:hover {
    color: #0080c1;
    text-decoration: underline;
  }
`;

export const Error = styled.p`
  font-size: 20px;
  color: red;
`;
