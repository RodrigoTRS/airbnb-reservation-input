import * as Popover from "@radix-ui/react-popover"
import styled from "styled-components";

export const CalendarTriggersWrapper = styled(Popover.Trigger)`
    display: grid;
    grid-template-columns: 1fr 1fr;

    border: 0;
    background: ${(props) => props.theme["background"]};
`

const Trigger = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    height: 64px;
    padding: 8px;
    font-size: 14px;

    background: transparent;
    border: 1px solid ${(props) => props.theme["border-foreground"]};

    span {
        font-size: 12px;
        font-weight: 700;
        margin-bottom: 4px;
        color: ${(props) => props.theme["text-muted-foreground"]}
    }

    &:hover {
        cursor: pointer;
    }
`

export const CheckinTrigger = styled(Trigger)`
    border-top-left-radius: 8px;
`
export const CheckoutTrigger = styled(Trigger)`
    border-top-right-radius: 8px;
`