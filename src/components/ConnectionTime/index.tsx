import { useCall } from "../../hooks/useCall"

export function ConnectionTime() {

    const { handleConnectionTime } = useCall()

    return (
        <input
            type="number"
            name="connection-time"
            onChange={(e) => handleConnectionTime(parseInt(e.target.value))}
            required
        />
    )
}