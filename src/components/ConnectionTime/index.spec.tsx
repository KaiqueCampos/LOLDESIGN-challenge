import { fireEvent, render } from '@testing-library/react'
import App from "../../App"
import { CallContextProvider } from '../../contexts/callContext'

describe('#ConnectionTime component', () => {
    test('Must be able to write the number of minutes in the input element', () => {
        const { getByPlaceholderText } = render(

            <CallContextProvider>
                <App />
            </CallContextProvider>
        )

        const connectionTimeElement = getByPlaceholderText("Minutos da ligação") as HTMLInputElement;

        fireEvent.change(connectionTimeElement, { target: { value: 25 } })
        expect(parseInt(connectionTimeElement.value)).toBe(25)

    })
})

