import { styled } from "styled-components";

interface SeparatorProps {
    orientation: "horizontal" | "vertical"
}

export const Separator = styled.div<SeparatorProps>`
    background: ${(props) => props.theme["border-foreground"]};

    height: ${({ orientation }) => orientation === "horizontal" ? "1px" : "100%"};
    width: ${({ orientation }) => orientation === "horizontal" ? "100%" : "1px"};

`