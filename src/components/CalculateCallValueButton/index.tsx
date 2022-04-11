import { useCall } from "../../hooks/useCall"

export function CalculateCallValueButton() {

    const { calculateCallValue } = useCall()

    return (
        <button
            onClick={calculateCallValue}
        >
            Calcular
        </button>
    )
}