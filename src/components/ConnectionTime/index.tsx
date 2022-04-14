import { useCall } from "../../hooks/useCall"
import styles from "./styles.module.scss"

export function ConnectionTime() {

    const { handleConnectionTime } = useCall()

    return (
        <div className={styles.container}>

            <label>Minutos da Ligação</label>

            <input
                className={styles.input}
                type="number"
                name="connection-time"
                onChange={(e) => handleConnectionTime(parseInt(e.target.value))}
                placeholder="Minutos da ligação"
                required
            />
        </div>
    )
}