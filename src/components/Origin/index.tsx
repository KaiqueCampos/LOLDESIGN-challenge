import { useCall } from "../../hooks/useCall"
import styles from './styles.module.scss'

export function Origin() {

    const {
        handleCallOrigin
    } = useCall()

    return (
        <div className={styles.container}>

            <label>Origem</label>
            <select
                data-testid="call-origin"
                className={styles.call_origin}
                onChange={(e) => handleCallOrigin(e.target.value)}
            >
                <option data-testid="origin-ddd">011</option>
                <option data-testid="origin-ddd">016</option>
                <option data-testid="origin-ddd">017</option>
                <option data-testid="origin-ddd">018</option>
            </select>

        </div>

    )
}