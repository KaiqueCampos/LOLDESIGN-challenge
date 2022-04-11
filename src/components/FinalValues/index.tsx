import { useCall } from "../../hooks/useCall"
import styles from './styles.module.scss'

export function FinalValues() {

    const {
        priceWithoutPlan,
        cellPhonePlan,
        priceWithPlan,
    } = useCall()

    return (
        <div className={styles.container}>
            <div>
                <h3>Preço sem o plano: ${priceWithoutPlan.toFixed(2)}</h3>
            </div>

            <div>
                <h3>Preço com {cellPhonePlan} é de: ${priceWithPlan.toFixed(2)}</h3>
            </div>
        </div>
    )
}