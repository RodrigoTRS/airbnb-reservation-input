import { styled } from "styled-components";

export const Disclaimer = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.875em;
    color: ${(props) => props.theme["text-muted-foreground"]};
    
    width: 100%;
`