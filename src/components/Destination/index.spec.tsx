import { fireEvent, render, screen } from '@testing-library/react'
import App from "../../App"
import { CallContextProvider } from '../../contexts/callContext'


describe("#Destination component", () => {
    test('must be able to select a call destination option', () => {

        const { getAllByTestId } = render(
            <CallContextProvider>
                <App />
            </CallContextProvider>
        )

        const callDestinationElement = screen.getByTestId("call-destination") as HTMLSelectElement
        const callDestinationOptions = getAllByTestId('destination-ddd')
        const selectedCallDestinationOption = callDestinationOptions[2].innerHTML

        fireEvent.change(callDestinationElement, { target: { value: selectedCallDestinationOption } })
        expect((callDestinationOptions[2] as HTMLOptionElement).selected).toBe(true)

        expect(callDestinationElement).toBeTruthy()
        expect(selectedCallDestinationOption).toBe("018")

    })

    test('should be able to return ddd 016, 017 and 018 if call origin ddd is 011', () => {

        const { getAllByTestId } = render(
            <CallContextProvider>
                <App />
            </CallContextProvider>
        )

        const callOriginElement = screen.getByTestId("call-origin") as HTMLSelectElement
        const callOriginOptions = getAllByTestId('origin-ddd')
        const selectedCallDestinationOption = callOriginOptions[0].innerHTML

        fireEvent.change(callOriginElement, { target: { value: selectedCallDestinationOption } })
        expect((callOriginOptions[0] as HTMLOptionElement).selected).toBe(true)
        expect(selectedCallDestinationOption).toBe("011")

        const callDestinationOptions = getAllByTestId('destination-ddd')
        expect(callDestinationOptions.length).toBe(3)

    })


    test('should be able to return only ddd 011 if the origin of the ddd call is 016, 017 or 018', () => {

        const { getAllByTestId } = render(
            <CallContextProvider>
                <App />
            </CallContextProvider>
        )

        const callOriginElement = screen.getByTestId("call-origin") as HTMLSelectElement
        const callOriginOptions = getAllByTestId('origin-ddd')
        const selectedCallDestinationOption = callOriginOptions[1].innerHTML

        fireEvent.change(callOriginElement, { target: { value: selectedCallDestinationOption } })
        expect((callOriginOptions[1] as HTMLOptionElement).selected).toBe(true)
        expect(selectedCallDestinationOption).toBe("016")

        const callDestinationOptions = getAllByTestId('destination-ddd')
        expect(callDestinationOptions.length).toBe(1)

    })
})