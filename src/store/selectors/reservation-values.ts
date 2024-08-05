import { createSelector } from "reselect";
import { RootState } from "..";

const selectReservation = (state: RootState) => state.reservation;
const selectNumberOfGuests = (state: RootState) => state.reservation.numberOfGuests;

export const selectCheckInDate = createSelector(
    [selectReservation],
    (reservation) => reservation.checkinDate
);

export const selectCheckOutDate = createSelector(
    [selectReservation],
    (reservation) => reservation.checkoutDate
);

export const selectDailyValue = createSelector(
    [selectReservation],
    (reservation) => reservation.dailyValue
);
    
export const selectCleaningFee = createSelector(
    [selectReservation],
    (reservation) => reservation.cleaningFee
);

export const selectNumberOfAdultGuests = createSelector(
    [selectNumberOfGuests],
    (numberOfGuests) => numberOfGuests.adults
);

export const selectNumberOfChildrenGuests = createSelector(
    [selectNumberOfGuests],
    (numberOfGuests) => numberOfGuests.children
);
    
export const selectNumberOfInfantsGuests = createSelector(
    [selectNumberOfGuests],
    (numberOfGuests) => numberOfGuests.infants
);

export const selectNumberOfPets = createSelector(
    [selectNumberOfGuests],
    (numberOfGuests) => numberOfGuests.pets
);
    
export const selectTotalNumberOfGuests = createSelector(
    [selectNumberOfAdultGuests, selectNumberOfChildrenGuests, selectNumberOfInfantsGuests, selectNumberOfPets],

    (adults, children, infants, pets) => ({
        adults,
        children,
        infants,
        pets
    })
)

export const selectReservationValues = createSelector(
    [selectDailyValue, selectTotalNumberOfGuests, selectCleaningFee],
    (dailyValue, totalGuests, cleaningFee) => ({
        dailyValue,
        ...totalGuests,
        cleaningFee,
    })
);

export const selectCheckInAndOutValues = createSelector(
    [selectCheckInDate, selectCheckOutDate],
    (checkinDate, checkoutDate) => ({
        checkinDate,
        checkoutDate
    })
);