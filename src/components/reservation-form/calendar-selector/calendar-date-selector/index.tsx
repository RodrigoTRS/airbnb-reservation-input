import { MonthMapper } from "../../../../utils/month-mapper";
import { CalendarDateButton, CalendarDateContainer, CalendarDateText, MinusIcon, PlusIcon } from "./styles";

interface CaledarDateProps {
    calendarDate: {
        month: number;
        year: number;
    }
    setCalendarDate:  React.Dispatch<React.SetStateAction<{
        month: number;
        year: number;
    }>>
}


export function CalendarDateSelector({
    calendarDate,
    setCalendarDate
}: CaledarDateProps) {


    function handleIncreaseCalendarDate() {
        if (calendarDate.month === 11) { 
            setCalendarDate((state) => ({
                month: 0,
                year: state.year + 1
            }));
        } else {
            setCalendarDate((state) => ({
                month: state.month + 1,
                year: state.year
            }));
        }
    }

    function handleDecreaseCalendarDate() {
        if (calendarDate.month === 0) { 
            setCalendarDate((state) => ({
                month: 11,
                year: state.year - 1
            }));
        } else {
            setCalendarDate((state) => ({
                month: state.month - 1,
                year: state.year
            }));
        }
    }

    return (
        <CalendarDateContainer>
            <CalendarDateButton
                onClick={handleDecreaseCalendarDate}
            >
                <MinusIcon />
            </CalendarDateButton>
            <CalendarDateText>
                {MonthMapper[calendarDate.month] + ", " + calendarDate.year}
            </CalendarDateText>
            <CalendarDateButton
                onClick={handleIncreaseCalendarDate}
            >
                <PlusIcon />
            </CalendarDateButton>
        </CalendarDateContainer>
    )
}