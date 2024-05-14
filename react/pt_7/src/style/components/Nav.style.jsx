import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: ${({$backgroundColor})=> $backgroundColor};
    height: 50px;
    width: 100%;
    margin-bottom: 10px;

`