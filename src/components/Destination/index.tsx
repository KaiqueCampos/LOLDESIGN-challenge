import { useCall } from "../../hooks/useCall"
import styles from './styles.module.scss'

export function Destination() {

    const {
        callOrigin,
        handleCallDestination
    } = useCall()

    return (
        <select
            className={styles.container}
            onChange={(e) => handleCallDestination(e.target.value)}
        >
            {callOrigin === "011" ? (
                <>
                    <option>016</option>
                    <option>017</option>
                    <option>018</option>
                </>
            ) : (
                <option>011</option>
            )}
        </select>
    )
}