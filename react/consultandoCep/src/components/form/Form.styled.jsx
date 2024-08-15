import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: baseline;
    padding-top: 30px;
    gap: 15px;
    height: 90%;
    width: 90%;
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    color: white;
`

export const Input = styled.input`
    padding: 3px 5px;
    border-radius: 6px;
    border: 1px solid black;
`

export const Erro = styled.p`
    color: #ff0000dc;
    font-size: 0.9em;
`