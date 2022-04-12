import { fireEvent, render, screen } from '@testing-library/react'
import App from "../../App"
import { CallContextProvider } from '../../contexts/callContext'

test('should be able to render cellular plans and select an option', () => {
    const { getAllByTestId, getByText } = render(
        <CallContextProvider>
            <App />
        </CallContextProvider>
    )

    const cellPhonePlans = screen.getByTestId("cell-phone-plan") as HTMLSelectElement
    const cellPhonePlanOptions = getAllByTestId('cell-phone-plan-options')
    const selectedCellPhoneOption = cellPhonePlanOptions[2].innerHTML

    fireEvent.change(cellPhonePlans, { target: { value: selectedCellPhoneOption } })
    expect((getByText(selectedCellPhoneOption) as HTMLOptionElement).selected).toBe(true)

    expect(cellPhonePlans).toBeTruthy()
    expect(cellPhonePlanOptions.length).toBe(3)

})