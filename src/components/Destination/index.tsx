import { useCall } from "../../hooks/useCall"
import styles from './styles.module.scss'

export function Destination() {

    const {
        callOrigin,
        handleCallDestination
    } = useCall()

    return (
        <div className={styles.container}>

            <label>Destino</label>

            <select
                data-testid="call-destination"
                className={styles.call_destination}
                onChange={(e) => handleCallDestination(e.target.value)}
            >
                {callOrigin === "011" ? (
                    <>
                        <option data-testid="destination-ddd">016</option>
                        <option data-testid="destination-ddd">017</option>
                        <option data-testid="destination-ddd">018</option>
                    </>
                ) : (
                    <option data-testid="destination-ddd">011</option>
                )}
            </select>
        </div>
    )
}