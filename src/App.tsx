import { MainWrapper } from "./components/main-wrapper";
import { ReservationForm } from "./components/reservation-form";

export function App() {

  const dailyValue = 1490
  const cleaningFee = 230

  return (
    <MainWrapper>
      <ReservationForm
        dailyValue={dailyValue}
        cleaningFee={cleaningFee}
      />
    </MainWrapper>
  )
}
