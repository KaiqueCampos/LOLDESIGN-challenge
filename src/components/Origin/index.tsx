import { useCall } from "../../hooks/useCall"
import styles from './styles.module.scss'

export function Origin() {

    const {
        handleCallOrigin
    } = useCall()

    return (
        <select
            className={styles.container}
            onChange={(e) => handleCallOrigin(e.target.value)}
        >
            <option>011</option>
            <option>016</option>
            <option>017</option>
            <option>018</option>
        </select>
    )
}