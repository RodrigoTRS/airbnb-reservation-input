import { styled } from "styled-components";

export const Card = styled.div`
    width: 100%;
    max-width: 400px;

    display: flex;
    flex-direction: column;

    gap: 1.5em;
    padding: 1.5em;
    border-radius: 12px;

    border: 1px solid ${(props) => props.theme["border-foreground"]};
    background-color: ${(props) => props.theme["card"]};

    box-shadow: 0px 4px 16px 0px ${(props) => props.theme["border-foreground"]};
`

export const DailyPrice = styled.h2`
    font-size: 1.25em;
    font-weight: 600;
    display: flex;
    align-items: end;
    gap: 0.125em;
    color:  ${(props) => props.theme["text-foreground"]};


    span {
        font-weight: 400;
        font-size: 0.875em;
    }
`

export const TriggersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

