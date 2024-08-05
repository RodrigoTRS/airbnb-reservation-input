export function calculateServiceFee(dailyValue: number, numberOfDays: number) {
    return dailyValue * 0.1 * numberOfDays
}