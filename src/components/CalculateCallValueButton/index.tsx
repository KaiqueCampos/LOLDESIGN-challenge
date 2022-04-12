import { useCall } from "../../hooks/useCall"
import styles from './styles.module.scss'

export function CalculateCallValueButton() {

    const { calculateCallValue } = useCall()

    return (
        <button
            data-testid="calculate-call-value-button"
            className={styles.container}
            onClick={calculateCallValue}
        >
            Calcular
        </button>
    )
}