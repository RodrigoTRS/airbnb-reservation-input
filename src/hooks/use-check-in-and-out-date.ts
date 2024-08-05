import { useSelector } from 'react-redux';
import { selectCheckInAndOutValues } from "../store/selectors/reservation-values";

export function useCheckInAndOutValues() {
    const checkInAndOut = useSelector(selectCheckInAndOutValues);

    return {
        checkinDate: checkInAndOut.checkinDate ? new Date(checkInAndOut.checkinDate) : null,
        checkoutDate: checkInAndOut.checkoutDate ? new Date(checkInAndOut.checkoutDate) : null,
    }
}