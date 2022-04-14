import { useCall } from "../../hooks/useCall"
import styles from './styles.module.scss'
import animate from '../../styles/animate.module.scss'

export function CalculateCallValueButton() {

    const { calculateCallValue } = useCall()

    return (
        <button
            data-testid="calculate-call-value-button"
            className={`${styles.container} ${animate.up1}`}
            onClick={calculateCallValue}
        >
            Calcular
        </button>
    )
}