import styled from "styled-components";

export const PriceCalculatorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    gap: 0.75em;
`

export const CalculationRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    b {
        font-weight: 600;
    }
`