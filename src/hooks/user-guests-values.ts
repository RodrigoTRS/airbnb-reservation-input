import { useSelector } from 'react-redux';
import { selectTotalNumberOfGuests } from '../store/selectors/reservation-values';

export function useGuestsValues() {
    return useSelector(selectTotalNumberOfGuests);
}