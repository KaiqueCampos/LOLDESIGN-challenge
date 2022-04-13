import { fireEvent, render } from '@testing-library/react'
import App from "../../App"
import { CallContextProvider } from '../../contexts/callContext'

describe("#CallInformations component", () => {
    test('should render all components inside the call info component', () => {
        const { getByTestId, getByPlaceholderText } = render(
    
            <CallContextProvider>
                <App />
            </CallContextProvider>
        )
    
        expect(getByTestId("call-origin")).toBeTruthy()
        expect(getByTestId("call-destination")).toBeTruthy()
        expect(getByPlaceholderText("Minutos da ligação")).toBeTruthy()
        expect(getByTestId("cell-phone-plan")).toBeTruthy()    
    })
})

