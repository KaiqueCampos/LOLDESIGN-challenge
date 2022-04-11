import { useCall } from "../../hooks/useCall"

export function Origin() {

    const {
        handleCallOrigin
    } = useCall()

    return (
        <select
            onChange={(e) => handleCallOrigin(e.target.value)}
        >
            <option>011</option>
            <option>016</option>
            <option>017</option>
            <option>018</option>
        </select>
    )
}