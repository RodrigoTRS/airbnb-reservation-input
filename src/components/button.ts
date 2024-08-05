import { styled } from "styled-components";

interface ButtonProps {
    variant: "default"
}

export const Button = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 12px;
    border-radius: 8px;
    border: 0px;

    font-size: 1em;
    font-weight: 600;

    color: ${(props) => props.theme["text-background"]};
    background-image: linear-gradient(to right,
        ${(props) => props.theme["primary"]},
        ${(props) => props.theme["muted-primary"]}
    );

    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }

`