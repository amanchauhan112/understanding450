import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  height: 50px;
  justify-content:centre;
  margin-left: 0px;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;

`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
 
  :hover{color:#15cdfc;}
`;



export const NavMenu = styled.div`
  display: flex;
 justify-content: end;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;