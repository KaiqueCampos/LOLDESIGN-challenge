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
                <span>Preço sem o plano</span>
                <h3>${priceWithoutPlan?.toFixed(2)}</h3>
            </div>

            <div>
                <span>Preço com o plano {cellPhonePlan}</span>
                <h3>${priceWithPlan?.toFixed(2)}</h3>
            </div>
        </div>
    )
}