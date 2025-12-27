import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  height: 50px;
  display : flex;
  // justify-content: flex-start;
  margin-left: 0px;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  // width: 50%;
 
  
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

export const NavHead = styled(Link)`
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
//  justify-content: flex-start;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
// export const NavHead = styled.div`
//   display: flex;
// //  justify-content: flex-start;
//   @media screen and (max-width: 768px) {
//     display: block;
//   }
// `;