import * as Popover from "@radix-ui/react-popover";
import { GuestsTrigger } from "../guests-trigger";
import { GuestsCounter } from "../guests-counter";
import { useAppSelector } from "../../../../store";

import { 
    incrementAdults,
    decrementAdults,
    incrementChildren,
    decrementChildren,
    incrementInfants,
    decrementInfants,
    incrementPets,
    decrementPets,

} from "../../../../store/slices/reservation";

import {
    ClosePopover,
    GuestPopoverContainer,
    GuestSelectorDescription,
    GuestSelectorRow,
} from "./styles";
import { Disclaimer } from "../../../disclaimer";

export function GuestsPopover() {
    return (
        <Popover.Root>
            <GuestsTrigger />
            <Popover.Portal>
                <Popover.Content>
                    <GuestPopoverContent />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}

function GuestPopoverContent() {

    const {
        adults,
        children,
        infants,
        pets
    } = useAppSelector((state) => {
        return state.reservation.numberOfGuests
    })

    return (
        <GuestPopoverContainer>

            <GuestSelectorRow>
                <GuestSelectorDescription>
                    <b>Adults</b>
                    Age 13+
                </GuestSelectorDescription>
                <GuestsCounter
                    min={1}
                    count={adults}
                    increment={incrementAdults}
                    decrement={decrementAdults}
                />
            </GuestSelectorRow>

            <GuestSelectorRow>
                <GuestSelectorDescription>
                    <b>Children</b>
                    Ages 2-12
                </GuestSelectorDescription>
                <GuestsCounter
                    min={0}
                    count={children}
                    increment={incrementChildren}
                    decrement={decrementChildren}
                />
            </GuestSelectorRow>

            <GuestSelectorRow>
                <GuestSelectorDescription>
                    <b>Infants</b>
                    Under 2
                </GuestSelectorDescription>
                <GuestsCounter
                    min={0}
                    count={infants}
                    increment={incrementInfants}
                    decrement={decrementInfants}
                />
            </GuestSelectorRow>

            <GuestSelectorRow>
                <GuestSelectorDescription>
                    <b>Pets</b>
                </GuestSelectorDescription>
                <GuestsCounter
                    min={0}
                    count={pets}
                    increment={incrementPets}
                    decrement={decrementPets}
                />
            </GuestSelectorRow>

            <Disclaimer>
                This place has a maximum of 2 guests, not including infants. If you're bringing more than 2 pets, please let your host know.
            </Disclaimer>

            <ClosePopover>
                Close
            </ClosePopover>

        </GuestPopoverContainer>
    )
}