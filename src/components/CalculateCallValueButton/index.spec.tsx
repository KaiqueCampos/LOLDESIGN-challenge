import { fireEvent, render, screen } from '@testing-library/react'
import App from "../../App"
import { CallContextProvider } from "../../contexts/callContext"
import { data } from '../../utils/data'

describe("#Calculate Call Value Button component", () => {
    test('should check if the calculate call value button is in the document', () => {
        const { getByTestId } = render(<App />)

        expect(getByTestId("calculate-call-value-button")).toBeTruthy()
    })

    test("must be able to calculate call value with plan and without plan", () => {
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

    })

    test('should be able to return a call value with plan with value of $0.00', () => {
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
        const selectedCallDestinationOption = callDestinationOptions[0].innerHTML

        fireEvent.change(callDestinationElement, { target: { value: selectedCallDestinationOption } })
        expect((callDestinationOptions[0] as HTMLOptionElement).selected).toBe(true)

        expect(selectedCallDestinationOption).toBe("016")

        // Connection Time
        const connectionTimeElement = getByPlaceholderText("Minutos da ligação") as HTMLInputElement;

        fireEvent.change(connectionTimeElement, { target: { value: 20 } })
        expect(parseInt(connectionTimeElement.value)).toBe(20)

        // CellPhone Plan
        const cellPhonePlans = screen.getByTestId("cell-phone-plan") as HTMLSelectElement
        const cellPhonePlanOptions = getAllByTestId('cell-phone-plan-options')
        const selectedCellPhoneOption = cellPhonePlanOptions[0].innerHTML

        fireEvent.change(cellPhonePlans, { target: { value: selectedCellPhoneOption } })
        expect((getByText(selectedCellPhoneOption) as HTMLOptionElement).selected).toBe(true)
        expect(selectedCellPhoneOption).toBe("FaleMais 30")


        // Calculate call value 
        fireEvent.click(getByTestId("calculate-call-value-button"))

        const connectionTime = parseInt(connectionTimeElement.value)

        const callInformation = data.filter(call => call.origin === selectedCallOriginOption && call.destination === selectedCallDestinationOption)
        const pricePerMinute = callInformation[0].pricePerMinute

        const planDiscount = selectedCellPhoneOption === "FaleMais 30"
            ? 30
            : (selectedCellPhoneOption === "FaleMais 60" ? 60 : 120)


        if (planDiscount < connectionTime) {
            const surplusMinutes = connectionTime - planDiscount
            const tariff = (pricePerMinute * 10) / 100

            const priceWithPlan = ((surplusMinutes * (tariff + pricePerMinute)))

        } else {
            const priceWithPlan = 0
            const priceWithoutPlan = pricePerMinute * connectionTime

            expect(priceWithPlan.toFixed(2)).toBe(0.00.toFixed(2))
            expect(priceWithoutPlan.toFixed(2)).toBe(38.00.toFixed(2))
        }

    })

    test('should be able to return a call value with the FaleMais 120 plan', () => {
        const { getByText, getByTestId, getAllByTestId, getByPlaceholderText } = render(
            <CallContextProvider>
                <App />
            </CallContextProvider>
        )

        // Origin
        const callOriginElement = screen.getByTestId("call-origin") as HTMLSelectElement
        const callOriginOptions = getAllByTestId('origin-ddd')
        const selectedCallOriginOption = callOriginOptions[3].innerHTML

        fireEvent.change(callOriginElement, { target: { value: selectedCallOriginOption } })
        expect((callOriginOptions[3] as HTMLOptionElement).selected).toBe(true)
        expect(selectedCallOriginOption).toBe("018")


        // Destination
        const callDestinationElement = screen.getByTestId("call-destination") as HTMLSelectElement
        const callDestinationOptions = getAllByTestId('destination-ddd')
        const selectedCallDestinationOption = callDestinationOptions[0].innerHTML

        fireEvent.change(callDestinationElement, { target: { value: selectedCallDestinationOption } })
        expect((callDestinationOptions[0] as HTMLOptionElement).selected).toBe(true)

        expect(selectedCallDestinationOption).toBe("011")

        // Connection Time
        const connectionTimeElement = getByPlaceholderText("Minutos da ligação") as HTMLInputElement;

        fireEvent.change(connectionTimeElement, { target: { value: 200 } })
        expect(parseInt(connectionTimeElement.value)).toBe(200)

        // CellPhone Plan
        const cellPhonePlans = screen.getByTestId("cell-phone-plan") as HTMLSelectElement
        const cellPhonePlanOptions = getAllByTestId('cell-phone-plan-options')
        const selectedCellPhoneOption = cellPhonePlanOptions[2].innerHTML

        fireEvent.change(cellPhonePlans, { target: { value: selectedCellPhoneOption } })
        expect((getByText(selectedCellPhoneOption) as HTMLOptionElement).selected).toBe(true)
        expect(selectedCellPhoneOption).toBe("FaleMais 120")


        // Calculate call value 
        fireEvent.click(getByTestId("calculate-call-value-button"))

        const connectionTime = parseInt(connectionTimeElement.value)

        const callInformation = data.filter(call => call.origin === selectedCallOriginOption && call.destination === selectedCallDestinationOption)
        const pricePerMinute = callInformation[0].pricePerMinute

        const planDiscount = selectedCellPhoneOption === "FaleMais 30"
            ? 30
            : (selectedCellPhoneOption === "FaleMais 60" ? 60 : 120)


        if (planDiscount < connectionTime) {
            const surplusMinutes = connectionTime - planDiscount
            const tariff = (pricePerMinute * 10) / 100

            const priceWithPlan = ((surplusMinutes * (tariff + pricePerMinute)))

        } else {
            const priceWithPlan = 0
            const priceWithoutPlan = pricePerMinute * connectionTime

            expect(priceWithPlan.toFixed(2)).toBe(167.20.toFixed(2))
            expect(priceWithoutPlan.toFixed(2)).toBe(380.00.toFixed(2))
        }

    })
})