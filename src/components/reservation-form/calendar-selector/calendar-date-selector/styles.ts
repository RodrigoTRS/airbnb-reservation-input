import { Minus, Plus } from "lucide-react";
import styled from "styled-components";

export const CalendarDateContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    column-span: 7;
`

export const CalendarDateText = styled.span`
    font-size: 1em;
    font-weight: 500;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

export const CalendarDateButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;

    background: transparent;
    border: 1px solid ${(props) => props.theme["border-foreground"]};
    border-radius: 8px;

    &:not(:disabled):hover {
        background: ${(props) => props.theme["muted-background"]};
        cursor: pointer;
    }

    &:disabled {

    }
`

export const PlusIcon = styled(Plus)`
    width: 16px;
    height: 16px;
`

export const MinusIcon = styled(Minus)`
    width: 16px;
    height: 16px;
`