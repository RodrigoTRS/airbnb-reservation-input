import * as Popover from "@radix-ui/react-popover"
import { CalendarTrigger } from "../calendar-trigger"
import { CalendarDay, CalendarGrid, CalendarPopoverContainer, WeekDayMarker } from "./styles"
import { useCalendarArray } from "../../../../hooks/use-calendar-array";
import { useMemo, useState } from "react";
import { CalendarDateSelector } from "../calendar-date-selector";
import { useDispatch } from "react-redux";
import { useCheckInAndOutValues } from "../../../../hooks/use-check-in-and-out-date";
import { setCheckinDate, setCheckoutDate } from "../../../../store/slices/reservation";


export function CalendarPopover() {
    return (
        <Popover.Root>
            <CalendarTrigger />
            <Popover.Portal>
                <Popover.Content>
                    <CalendarPopoverContent />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}

function CalendarPopoverContent() {

    const dispatch = useDispatch()

    const {
        checkinDate,
        checkoutDate
    } = useCheckInAndOutValues();

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const weekDaysArray = ["S", "M", "T", "W", "T", "F", "S"]

    const [calendarDate, setCalendarDate] = useState<{
        month: number,
        year: number
    }>({
        month: currentMonth,
        year: currentYear
    })

    const { calendarArray } = useCalendarArray(calendarDate)

    function handleSelectDays(date: Date) {
        const dateString = date.toISOString()

        if (!checkinDate && !checkoutDate) {
            dispatch(setCheckinDate(dateString))
            return
        }

        if (checkinDate && checkoutDate) {
            dispatch(setCheckinDate(dateString))
            dispatch(setCheckoutDate(null))
            return
        }

        dispatch(setCheckoutDate(dateString))
    }

    const activeDays = useMemo(() => {
        let days: Date[] = [];

        if (checkinDate && checkoutDate) {
            let start = new Date(checkinDate);
            let end = new Date(checkoutDate);

            while (start <= end) {
                days.push(new Date(start));
                start.setDate(start.getDate() + 1);
            }
        } else if (checkinDate) {
            days = [new Date(checkinDate)];
        }

        return days;
    }, [checkinDate, checkoutDate]);


    return (
        <CalendarPopoverContainer>
            <CalendarDateSelector
                calendarDate={calendarDate}
                setCalendarDate={setCalendarDate}
            />
            <CalendarGrid>
                {weekDaysArray.map((weekDay, index) => {
                    return (
                        <WeekDayMarker
                            key={index}
                        >
                            {weekDay}
                        </WeekDayMarker>
                    )
                })}
                {calendarArray.map((day, index) => {
                    const dayDate = day.getDate()
                    const isActive = activeDays.some(activeDay => activeDay.toDateString() === day.toDateString());

                    return (
                        <CalendarDay
                            key={index}
                            disabled={checkinDate && !checkoutDate ? day <= checkinDate : day < currentDate}
                            variant={isActive ? "active" : "default"}
                            onClick={() => handleSelectDays(day)}

                        >
                            { dayDate }
                        </CalendarDay>
                    )
                })}
            </CalendarGrid>
        </CalendarPopoverContainer>
    )
}

