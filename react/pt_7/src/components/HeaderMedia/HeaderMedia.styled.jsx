import styled, { css } from "styled-components";
import { device } from "../../style/breakpoints";
import Button from "../../style/components/button.style";
export const HeaderMediaStyled = styled.nav`
    ${({$clicked})=>{
        if($clicked == 'true'){
            return css`
            position: fixed;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            gap:10px;
            width:100%;
            height:100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            background-color: #ffffff86;
            & svg{
                display: none !important;
            }

            & button {
                display: block !important;
            }

            & #exit{
               display: block !important;
               position: absolute;
               top: 10%;
               left: 99%;
               transform: translate(-99%,-100%);
            }

            `
        }
    }}
    ${({$clicked})=>{
        if($clicked == 'false'){
            return css`
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background-color: grey;
            padding: 8px;
        `
        }
    }}
   
    & svg{
        display: none;
        cursor: pointer;
        width: 30px;
        height: 30px;
    }

    & #exit {
        display:none;
    }

    @media ${device.sm}{
        & button {
            display: none;
        }

        & svg {
            display: block;
        }
    }
`