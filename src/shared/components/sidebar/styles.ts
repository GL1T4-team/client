import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 30px;
    flex-direction: column;
    background-color: #f4f7fc;
    padding: 35px 0 0 50px;
    border-radius: 25px 0px 0px 25px;
`;

export const User = styled.div`
    color: #000;
    padding: 0 20px 20px 20px;
`;

export const Nav = styled.nav``;

export const NavList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const NavListItem = styled.li`
    text-decoration: none;
`;

export const NavListItemLink = styled.div`
    display: block;
    width: 100%;
    text-decoration: none;
    font-size: 24px;
    color: #000000ff;
    padding: 21px 0 21px 32px;
    cursor: pointer;
    border-radius: 25px 0 0 25px;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #fefefe;
        box-shadow: inset 5px 4px 4px rgba(0, 0, 0, 0.1);
        color: #000;
    }

    &.active {
        background-color: #fefefe;
        box-shadow: inset 5px 4px 4px rgba(0, 0, 0, 0.1);
    }
`;
