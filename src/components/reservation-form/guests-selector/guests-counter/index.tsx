import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit"
import { GuestCounterButton, GuestCounterContainer, MinusIcon, PlusIcon } from "./styles"
import { useAppDispatch } from "../../../../store"

interface GuestsCounterProps {
    min: number,
    count: number
    increment: ActionCreatorWithoutPayload<any>,
    decrement: ActionCreatorWithoutPayload<any>,
}

export function GuestsCounter({
    min,
    count,
    increment,
    decrement
}: GuestsCounterProps) {

    const dispatch = useAppDispatch()

    return (
        <GuestCounterContainer>
            <GuestCounterButton
                onClick={() => dispatch(decrement())}
                disabled={count <= min}
            >
                <MinusIcon />
            </GuestCounterButton>
            <span>{count}</span>
            <GuestCounterButton
                onClick={() => dispatch(increment())}
            >
                <PlusIcon />
            </GuestCounterButton>
        </GuestCounterContainer>
    )
}