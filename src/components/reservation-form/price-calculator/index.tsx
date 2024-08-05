import dayjs from "dayjs";
import { useCheckInAndOutValues } from "../../../hooks/use-check-in-and-out-date";
import { useReservationValues } from "../../../hooks/use-reservation-values";
import { Separator } from "../../separator";
import { CalculationRow, PriceCalculatorWrapper } from "./styles";
import { calculateServiceFee } from "../../../utils/calculate-service-fee";

interface PriceCalculatorProps {
    serviceFee: number
    numberOfDays: number
}

export function PriceCalculator({
    serviceFee,
    numberOfDays
}: PriceCalculatorProps) {

    const {
        dailyValue,
        cleaningFee,
    } = useReservationValues()

    const totalReservationValueWithoutFees = dailyValue * numberOfDays

    const totalReservationValue = totalReservationValueWithoutFees + cleaningFee + serviceFee

    return (
        <PriceCalculatorWrapper>

            <CalculationRow>
                R${dailyValue} {`x ${numberOfDays} ${numberOfDays === 1 ? " night" : " nights"}`}
                <b>R${totalReservationValueWithoutFees}</b>
            </CalculationRow>

            <CalculationRow>
                Cleaning fee
                <b>R${cleaningFee}</b>
            </CalculationRow>

            <CalculationRow>
                Service fee
                <b>R${serviceFee}</b>
            </CalculationRow>

            <Separator orientation="horizontal" />

            <CalculationRow>
                <b>Total including fees</b>
                <b>R${totalReservationValue}</b>
            </CalculationRow>

        </PriceCalculatorWrapper>
    )
}