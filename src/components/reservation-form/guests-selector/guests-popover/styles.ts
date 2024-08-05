import * as Popover from "@radix-ui/react-popover";
import styled from "styled-components";

export const GuestPopoverContainer = styled.div`
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

export const GuestSelectorRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const GuestSelectorDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    font-family: "Poppins", sans-serif;
    font-size: 0.75em;

    b {
        font-weight: 600;
        font-size: 1.25em;
    }
`

export const ClosePopover = styled(Popover.Close)`
    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    border: 0;
    width: 40px;

    &:hover {
        cursor: pointer;
        text-decoration: underline
    }
`