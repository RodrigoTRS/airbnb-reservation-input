import { useCheckInAndOutValues } from "../../../../hooks/use-check-in-and-out-date";
import { CalendarTriggersWrapper, CheckinTrigger, CheckoutTrigger } from "./styles";
import { format } from "date-fns"

export function CalendarTrigger() {

    const {
        checkinDate,
        checkoutDate
    } = useCheckInAndOutValues()
    
    return (
        <CalendarTriggersWrapper>
            <CheckinTrigger>
                <span>Check-in</span>
                {checkinDate ? format(checkinDate, "dd/MM/yy") : "-"}
            </CheckinTrigger>
            
            <CheckoutTrigger>
                <span>Check-out</span>
                {checkoutDate ? format(checkoutDate, "dd/MM/yy") : "-"}
            </CheckoutTrigger>
        </CalendarTriggersWrapper>
    )
}