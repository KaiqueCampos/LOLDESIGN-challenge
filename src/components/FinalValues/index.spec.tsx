import { fireEvent, render, screen } from '@testing-library/react'
import App from "../../App"
import { CallContextProvider } from "../../contexts/callContext"
import { data } from '../../utils/data'

describe('#FinalValues component', () => {
    test('final values with plan and without plan must be returned', () => {
        const { getByText, getByTestId, getAllByTestId, getByPlaceholderText } = render(
            <CallContextProvider>
                <App />
            </CallContextProvider>
        )

        // Origin
        const callOriginElement = screen.getByTestId("call-origin") as HTMLSelectElement
        const callOriginOptions = getAllByTestId('origin-ddd')
        const selectedCallOriginOption = callOriginOptions[0].innerHTML

        fireEvent.change(callOriginElement, { target: { value: selectedCallOriginOption } })
        expect((callOriginOptions[0] as HTMLOptionElement).selected).toBe(true)
        expect(selectedCallOriginOption).toBe("011")


        // Destination
        const callDestinationElement = screen.getByTestId("call-destination") as HTMLSelectElement
        const callDestinationOptions = getAllByTestId('destination-ddd')
        const selectedCallDestinationOption = callDestinationOptions[1].innerHTML

        fireEvent.change(callDestinationElement, { target: { value: selectedCallDestinationOption } })
        expect((callDestinationOptions[1] as HTMLOptionElement).selected).toBe(true)

        expect(selectedCallDestinationOption).toBe("017")

        // Connection Time
        const connectionTimeElement = getByPlaceholderText("Minutos da ligação") as HTMLInputElement;

        fireEvent.change(connectionTimeElement, { target: { value: 80 } })
        expect(parseInt(connectionTimeElement.value)).toBe(80)

        // CellPhone Plan
        const cellPhonePlans = screen.getByTestId("cell-phone-plan") as HTMLSelectElement
        const cellPhonePlanOptions = getAllByTestId('cell-phone-plan-options')
        const selectedCellPhoneOption = cellPhonePlanOptions[1].innerHTML

        fireEvent.change(cellPhonePlans, { target: { value: selectedCellPhoneOption } })
        expect((getByText(selectedCellPhoneOption) as HTMLOptionElement).selected).toBe(true)
        expect(selectedCellPhoneOption).toBe("FaleMais 60")


        // Calculate call value 
        fireEvent.click(getByTestId("calculate-call-value-button"))

        const connectionTime = parseInt(connectionTimeElement.value)

        const callInformation = data.filter(call => call.origin === selectedCallOriginOption && call.destination === selectedCallDestinationOption)
        const pricePerMinute = callInformation[0].pricePerMinute

        const planDiscount = selectedCellPhoneOption === "FaleMais 30"
            ? 30
            : (selectedCellPhoneOption === "FaleMais 60" ? 60 : 120)

        const surplusMinutes = connectionTime - planDiscount
        const tariff = (pricePerMinute * 10) / 100

        const priceWithPlan = ((surplusMinutes * (tariff + pricePerMinute)))
        const priceWithoutPlan = pricePerMinute * connectionTime

        expect(priceWithPlan.toFixed(2)).toBe(37.40.toFixed(2))
        expect(priceWithoutPlan.toFixed(2)).toBe(136.00.toFixed(2))

        // Final Values

        expect(getByText("Preço sem o plano")).toBeTruthy()
        expect(getByText(`$${priceWithoutPlan.toFixed(2)}`)).toBeTruthy()

        expect(getByText(`Preço com o plano ${selectedCellPhoneOption}`)).toBeTruthy()
        expect(getByText(`$${priceWithPlan.toFixed(2)}`)).toBeTruthy()
    })
})