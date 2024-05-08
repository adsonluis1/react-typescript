import styled from "styled-components";

const Button = styled.button`
    transition: .8s;
    background: ${({$select,theme}) => $select?theme.color.main:theme.color.tertiary};
    color: ${({$select,theme}) => $select?theme.color.tertiary:theme.color.secundary};
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px;
    width: 100px;
    

    &:hover{
        width: 120px;
        background: ${({theme})=> theme.color.houver};
        color: white;
    }
`

export default Button