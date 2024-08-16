import {styled} from "styled-components"


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: baseline;
    color: #656565;
    gap: 5px;
    padding-top: 30px;
    width: 100%;
    height: 100%;
`

export const Label = styled.label`
    display: ${({$noneView})=> $noneView?"none":'flex'};
    flex-direction: ${({$row})=> $row?'row':'column'};
    gap: 5px;
`

export const Input = styled.input`
    padding: 4px 8px;
    border: 1px solid rgb(0,0,0,0.333);
    border-radius: 4px;
`

export const Error = styled.p`
    color: red;
    font-size: 0.9em;
`