import { useCall } from "../../hooks/useCall"

export function CellPhonePlan() {

    const {
        handleCellPhonePlan
    } = useCall()

    return (
        <select
            onChange={(e) => handleCellPhonePlan(e.target.value)}
        >
            <option>FaleMais 30</option>
            <option>FaleMais 60</option>
            <option>FaleMais 120</option>
        </select>
    )
}