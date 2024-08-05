import { useSelector } from 'react-redux';
import { selectReservationValues } from "../store/selectors/reservation-values";

export function useReservationValues() {
    return useSelector(selectReservationValues);
}