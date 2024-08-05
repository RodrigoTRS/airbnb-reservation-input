import { useSelector } from 'react-redux';
import { selectDailyValue } from "../store/selectors/reservation-values";

export function useDailyValue() {
    return useSelector(selectDailyValue);
}