import { ChevronDown } from "lucide-react"
import { GuestsTriggerButton } from "./styles"
import React from "react"
import { useAppSelector } from "../../../../store";

export const GuestsTrigger = React.forwardRef(() => {

    const {
        adults,
        children,
        infants,
        pets
    } = useAppSelector((state) => {
        return state.reservation.numberOfGuests
    })

    const totalOfGuests = adults + children

    return (
        <GuestsTriggerButton>
            <div>
                <span>Guests</span>
                {totalOfGuests}
                {totalOfGuests === 1 ? " guest" : " guests"}
                {infants > 0 && (
                    infants === 1 ? ", 1 infant" : `, ${infants} infants `
                )}
                {pets > 0 && (
                    pets === 1 ? ", 1 pet" : `, ${pets} pets `
                )}
            </div>
            <ChevronDown />
        </GuestsTriggerButton>
    )
});