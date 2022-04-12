import { render } from "@testing-library/react"
import App from "../../App"

test('should check if the calculate call value button is in the document', () => {
    const { getByTestId } = render(<App />)

    expect(getByTestId("calculate-call-value-button")).toBeTruthy()
})