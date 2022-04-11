import { useCall } from "../../hooks/useCall"
import styles from "./styles.module.scss"

export function ConnectionTime() {

    const { handleConnectionTime } = useCall()

    return (
        <input
            className={styles.input}
            type="number"
            name="connection-time"
            onChange={(e) => handleConnectionTime(parseInt(e.target.value))}
            placeholder="Minutos da ligação"
            required
        />
    )
}