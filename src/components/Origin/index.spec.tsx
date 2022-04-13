import { fireEvent, render, screen } from '@testing-library/react'
import App from "../../App"
import { CallContextProvider } from '../../contexts/callContext'

describe('#Origin component', () => {
    test('must be able to select a source call option', () => {

        const { getAllByTestId } = render(
            <CallContextProvider>
                <App />
            </CallContextProvider>
        )

        const callOriginElement = screen.getByTestId("call-origin") as HTMLSelectElement
        const callOriginOptions = getAllByTestId('origin-ddd')
        const selectedCallOriginOption = callOriginOptions[0].innerHTML

        fireEvent.change(callOriginElement, { target: { value: selectedCallOriginOption } })
        expect((callOriginOptions[0] as HTMLOptionElement).selected).toBe(true)
                
        expect(callOriginElement).toBeTruthy()
        expect(selectedCallOriginOption).toBe("011")

    })
})