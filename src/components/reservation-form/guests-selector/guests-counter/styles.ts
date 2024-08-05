import styled from "styled-components";
import { Minus, Plus } from "lucide-react"


export const GuestCounterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100px;
`

export const GuestCounterButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;

    background: ${(props) => props.theme["background"]};
    border: 1px solid ${(props) => props.theme["border-foreground"]};
    border-radius: 100%;

    line-height: 0px;
    
    &:hover {
        opacity: 0.8;
        cursor: pointer;
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