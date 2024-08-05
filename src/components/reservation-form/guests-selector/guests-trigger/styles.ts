import styled from "styled-components";
import * as Popover from "@radix-ui/react-popover"

export const GuestsTriggerButton = styled(Popover.Trigger)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 64px;
    padding: 8px;
    font-size: 14px;

    background: ${(props) => props.theme["background"]};
    border: 1px solid ${(props) => props.theme["border-foreground"]};
    border-radius: 0px 0px 8px 8px;

    div {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;

        span {
            font-size: 12px;
            font-weight: 700;
            color: ${(props) => props.theme["text-muted-foreground"]}
        }
    }


    &:hover {
        cursor: pointer;
    }
`