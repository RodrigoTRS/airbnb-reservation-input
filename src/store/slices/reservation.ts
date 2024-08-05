import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ReservationState {
    dailyValue: number,
    cleaningFee: number,
    checkinDate: string | null;
    checkoutDate: string | null;
    numberOfGuests: {
        adults: number,
        children: number,
        infants: number,
        pets: number,
    };
}

const initialState: ReservationState = {
    dailyValue: 0,
    cleaningFee: 0,
    checkinDate: null,
    checkoutDate: null,
    numberOfGuests: {
        adults: 1,
        children: 0,
        infants: 0,
        pets: 0,
    }
}

export const reservationSlice = createSlice({
    name: "reservation",
    initialState,
    reducers: {
        setReservationValues: (state, action: PayloadAction<{
            dailyValue: number,
            cleaningFee: number,
        }>) => {
            state.dailyValue = action.payload.dailyValue;
            state.cleaningFee = action.payload.cleaningFee;
        },
        setCheckinDate: (state, action: PayloadAction<string | null>) => {
            state.checkinDate = action.payload
        },
        setCheckoutDate: (state, action: PayloadAction<string | null>) => {
            state.checkoutDate = action.payload
        },
        incrementAdults: (state) => {
            state.numberOfGuests.adults = state.numberOfGuests.adults + 1
        },
        decrementAdults: (state) => {
            if (state.numberOfGuests.adults > 0) {
                state.numberOfGuests.adults = state.numberOfGuests.adults - 1
            }
        },
        incrementChildren: (state) => {
            state.numberOfGuests.children = state.numberOfGuests.children + 1
        },
        decrementChildren: (state) => {
            if (state.numberOfGuests.children > 0) {
                state.numberOfGuests.children = state.numberOfGuests.children - 1
            }
        },
        incrementInfants: (state) => {
            state.numberOfGuests.infants = state.numberOfGuests.infants + 1
        },
        decrementInfants: (state) => {
            if (state.numberOfGuests.infants > 0) {
                state.numberOfGuests.infants = state.numberOfGuests.infants - 1
            }
        },
        incrementPets: (state) => {
            state.numberOfGuests.pets = state.numberOfGuests.pets + 1
        },
        decrementPets: (state) => {
            if (state.numberOfGuests.pets > 0) {
                state.numberOfGuests.pets = state.numberOfGuests.pets - 1
            }
        }

    }
})

export const reservation = reservationSlice.reducer;
export const {
    setReservationValues,
    setCheckinDate,
    setCheckoutDate,
    incrementAdults,
    decrementAdults,
    incrementChildren,
    decrementChildren,
    incrementInfants,
    decrementInfants,
    incrementPets,
    decrementPets
} = reservationSlice.actions;

