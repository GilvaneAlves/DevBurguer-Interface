import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  height: 70px;
  background: #1f1f1f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  hr {
    height: 24px;
    border: 1px solid #625E5E;
  }
`;

export const HeaderLink = styled(Link)`
  color: ${(props) => (props.$isActive ? "#9758a6" : "#fff")};
  border-bottom: ${(props) => (props.$isActive ? '1px solid #9858a6' : 'none')};
  text-decoration: none;
  font-size: 18px;
  margin-right: 20px;

  &:hover {
    color: #9758a6;
    opacity: 0.7;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 20px; /* espaço entre Profile e outros elementos */
`;

export const Profile = styled.div`
  color: #fff;

  div {
    display: flex;       /* ícone e nome lado a lado */
    align-items: center;
    gap: 8px;
  }

  p {
    margin: 0;
    font-size: 14px;
  }

  span {
    font-weight: bold;
  }

  button {
    background: transparent;
    color: #fff;
    border: none;
    cursor: pointer;
    margin-left: 10px;
    font-size: 14px;

     &:hover {
    color: #9758a6;
    opacity: 0.7;
  }
  }
`;

export const Logout = styled.div`
  /* se quiser estilizar um container extra para o botão de logout */
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; /* espaço entre ícone e link do carrinho */

  span {
     cursor: pointer;
    color: #fff;

     &:hover {
    color: #9758a6;
    opacity: 0.7;
  }
}
`;
