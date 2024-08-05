import { CalendarPopover } from "./calendar-selector/calendar-popover";
import { GuestsPopover } from "./guests-selector/guests-popover";
import { PriceCalculator } from "./price-calculator";
import { Button } from "../button";
import { Card, DailyPrice, TriggersWrapper } from "../card";
import { Disclaimer } from "../disclaimer";
import { ReservationFormContainer } from "./styles";
import { useAppDispatch } from "../../store";
import { useEffect } from "react";
import { setReservationValues } from "../../store/slices/reservation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCheckInAndOutValues } from "../../hooks/use-check-in-and-out-date";
import { calculateServiceFee } from "../../utils/calculate-service-fee";
import dayjs from "dayjs";
import { useGuestsValues } from "../../hooks/user-guests-values";

const reservationFormSchema = z.object({
    dailyValue: z.number(),
    cleaningFee: z.number(),
    serviceFee: z.number(),
    checkinDate: z.date(),
    checkoutDate: z.date(),
    numberOfGuests: z.object({
        adults: z.number(),
        children: z.number(),
        infants: z.number(),
        pets: z.number(),
    })
})

type ReservationFormData = z.infer<typeof reservationFormSchema>

interface ReservationFormProps {
    dailyValue: number,
    cleaningFee: number 
}

export function ReservationForm({
    dailyValue,
    cleaningFee
}: ReservationFormProps) {

    const dispatch = useAppDispatch()

    const {
        setValue,
        handleSubmit,
        formState: {
            isSubmitting
        }
    } = useForm<ReservationFormData>({
        resolver: zodResolver(reservationFormSchema)
    })

    
    const {
        checkinDate,
        checkoutDate
    } = useCheckInAndOutValues()

    const {
        adults,
        children,
        infants,
        pets
    } = useGuestsValues()
    
    const numberOfDays = dayjs(checkoutDate).diff(dayjs(checkinDate)) / 60 / 60 / 24 / 1000 // In days
    const serviceFee = calculateServiceFee(dailyValue, numberOfDays)
    
    useEffect(() => {
      dispatch(setReservationValues({
        dailyValue: dailyValue,
        cleaningFee: cleaningFee,
      }))
      setValue("dailyValue", dailyValue)
      setValue("cleaningFee", cleaningFee)
      setValue("serviceFee", serviceFee)

    }, [dailyValue, cleaningFee, serviceFee, setValue])

    useEffect(() => {
        if (checkinDate && checkoutDate) {
            setValue("checkinDate", checkinDate)
            setValue("checkoutDate", checkoutDate)
        }
    }, [checkinDate, checkoutDate, setValue])

    useEffect(() => {
        setValue("numberOfGuests", { adults, children, infants, pets });
    }, [adults, children, infants, pets, setValue]);

    function handleReservationSubmit(data: ReservationFormData) {
        console.log(data)
        // Navigate from here after.
    }


    return (
        <ReservationFormContainer onSubmit={handleSubmit(handleReservationSubmit)}>
            <Card>

                <DailyPrice>
                R${dailyValue}<span>night</span>
                </DailyPrice>

                <TriggersWrapper>
                    <CalendarPopover />
                    <GuestsPopover />
                </TriggersWrapper>

                <Button
                    type="submit"
                    variant="default"
                    disabled={isSubmitting}
                >
                    Reserve
                </Button>

                <Disclaimer>You won't be charged yet</Disclaimer>

                {checkinDate && checkoutDate &&
                    <PriceCalculator
                        serviceFee={serviceFee}
                        numberOfDays={numberOfDays}
                    />
                }

            </Card>
        </ReservationFormContainer>
    )
}