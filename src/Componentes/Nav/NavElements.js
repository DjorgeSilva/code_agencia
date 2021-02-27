import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export const NavMenu = styled.nav`
    width: 100%;
    height: 100px;
    background-color: ${props => props.theme.primary_color};
    z-index:1000000;
    position: fixed;
`;

export const NavWrapper = styled.div`
    width: 100%;
    height: 100px;

    @media (min-width: 950px){
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    @media (min-width: 1300px){
            width:1300px;
            margin:0 auto;
    }
    `

export const NavIconWrap = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    position: relative;

    @media (min-width: 950px){
        width:fit-content;
    }
`;

export const IconMenuLateral = styled(GiHamburgerMenu)`
    cursor: pointer;
    color: ${props => props.theme.secundary_color};
    font-size: 3rem;

    @media (min-width: 950px){
         display: none;
    }
`;

export const NavLogoWrap = styled.div`
    width: 85%;
    float: right;
    overflow: hidden;
    img{
        width: 220px;
        float: right;
    }

    @media (min-width: 950px){
        width: 20%;
        overflow: hidden;
        img{
            width: 200px;
        }
    }
`
export const SideBar = styled.div`
    width: 300px;
    height: 100vh;
    background-color: ${props => props.theme.ternary_color};
    position: absolute;
    z-index:1000;
    left: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};
    transition: .8s all;
    @media (min-width: 950px){
            display: none;
        }
`
export const IconCloseSideBar = styled(IoClose)`
    cursor: pointer;
    color: ${props => props.theme.primary_color};
    font-size: 4rem;
    float:right;
    margin: 10px;

    &:hover{
        color: ${props => props.theme.secundary_color};
    }
`

export const NavSideBar = styled.nav`
    width: 100%;
    height: fit-content;
    
`;

export const SideBarUl = styled.ul`
    width: 100%;
    height: fit-content;
    padding: 70px 25px;
    list-style: none;

`

export const SideBarLi = styled.li`
    width: 100%;
`

export const LinkSideBar = styled(Link)`
    display: block;
    width: 100%;
    height: 60px;
    font-size: 1.7rem;
    color: ${props => props.theme.primary_color};
    font-weight: 600;
    text-decoration: none;
    outline: none;
    &:hover{
        color:  ${props => props.theme.secundary_color};
        outline: none;
        text-decoration:none;
    }
`
export const NavMenuDesktop = styled.div`
    width: 80%;
    height: 100px;
    display: flex;
    justify-content:center;
    align-items: center;
    @media (max-width: 950px){
        display: none;
    }

`;


export const MenuUl = styled.ul`
    width: fit-content;
    height: fit-content;
    list-style: none;
`

export const MenuLi = styled.li`
    width: 100%;
    height: 100%;
`

export const LinkMenu = styled(Link)`
display: inline;
width: 100%;
height: 60px;
font-size: 1.3rem;
color: #fff;;
font-weight: 600;
text-decoration: none;
margin-right: 40px;
outline: none;
text-transform: uppercase;
&:hover{
    color:  ${props => props.theme.ternary_color};
    border-bottom: 4px solid #67FFF0;
    outline: none;
    text-decoration:none;
    padding-bottom: 6px;
}
`