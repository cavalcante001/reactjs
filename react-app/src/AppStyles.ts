import styled from "styled-components";

export const Container = styled.div`
    background-color: blue;
    color: white;
    padding: 20px;
`;

type BotaoProps = {
    cor?: string
}
export const Botao = styled.button<BotaoProps>`
    font-size: 16px;
    border: 0;
    padding: 16px 32px;
    cursor: pointer;
    background-color: ${props => props.cor ? props.cor : '#ccc'};

    & + & {
        margin-left: 10px
    }
`;