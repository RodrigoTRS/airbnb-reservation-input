import dayjs from "dayjs";

interface UseCalendarArrayProps {
    month: number;
    year: number;
}

export function useCalendarArray(calendarDate: UseCalendarArrayProps) {

    const {
        month: selectedMonth,
        year: selectedYear
    } = calendarDate

    
    const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1);
    const firstDayWeekDay = firstDayOfMonth.getDay();
    const numberOfDaysOfLastMonth = dayjs(new Date(selectedYear, selectedMonth - 1, 1)).daysInMonth();
    const numberOfDaysOfCurrentMonth = dayjs(firstDayOfMonth).daysInMonth();
    const missingDaysFromNextMonth = 7 - ((numberOfDaysOfCurrentMonth + firstDayWeekDay ) % 7) ;


    const lastMonthDaysArray = Array.from(
        { length: firstDayWeekDay },
        (_, i) => new Date(selectedYear, selectedMonth - 1, (numberOfDaysOfLastMonth - firstDayWeekDay) + i)
    )

    const selectedMonthDaysArray = Array.from(
        { length: numberOfDaysOfCurrentMonth },
        (_, i) => new Date(selectedYear, selectedMonth, i + 1)
    );

    const nextMonthDaysArray = missingDaysFromNextMonth === 7
        ? []
        : Array.from(
        { length: missingDaysFromNextMonth },
        (_, i) => new Date(selectedYear, selectedMonth + 1, i + 1)
    );


 

    const calendarArray: Date[] = [
        ...lastMonthDaysArray,
        ...selectedMonthDaysArray,
        ...nextMonthDaysArray
    ]

    return {
        calendarArray
    }
} 