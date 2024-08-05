import { styled } from "styled-components";

export const CalendarPopoverContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 352px;
    padding: 12px;
    gap: 1.5em;
    margin-top: 1em;
    border-radius: 12px;
    
    border: 1px solid ${(props) => props.theme["border-foreground"]};
    background: ${(props) => props.theme["background"]};
    
    @media (max-width: 400px) {
        width: 300px;
    }
`

export const CalendarGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.125em;
`

interface CalendarDayProps {
    variant?: "default" | "active"
}

export const CalendarDay = styled.button<CalendarDayProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1em;
    font-weight: 500;

    background: ${(props) =>
        props.variant === "active"
        ? props.theme["secondary"]
        : "transparent"};

   color: ${(props) =>
        props.variant === "active"
        ? props.theme["background"]
        : "foreground"};

    border: 1px solid ${(props) => props.theme["border-foreground"]};
    border-radius: 8px;

    aspect-ratio: 1;

    &:not(:disabled):hover {
        cursor: pointer;
        background: ${(props) =>
            props.variant === "active"
            ? props.theme["muted-secondary"]
            : props.theme["muted-background"]
        }
    }

    &:disabled {
        opacity: 0.5;
        cursor: auto;
    }
`

export const WeekDayMarker = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme["text-muted-foreground"]};
    margin-bottom: 0.5em;


    width: 100%;

    font-family: "Poppins", sans-serif;
    
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`