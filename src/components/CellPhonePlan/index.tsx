import { useCall } from "../../hooks/useCall"
import styles from './styles.module.scss';

export function CellPhonePlan() {

    const {
        handleCellPhonePlan
    } = useCall()

    return (
        <select
            data-testid="cell-phone-plan"
            className={styles.container}
            onChange={(e) => handleCellPhonePlan(e.target.value)}
        >


            <option
                data-testid="cell-phone-plan-options"
            >
                FaleMais 30
            </option>

            <option
                data-testid="cell-phone-plan-options"
            >
                FaleMais 60
            </option>

            <option
                data-testid="cell-phone-plan-options"
            >
                FaleMais 120
            </option>
        </select>
    )
}