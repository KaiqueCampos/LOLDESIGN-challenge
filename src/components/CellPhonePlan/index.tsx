import { useCall } from "../../hooks/useCall"
import styles from './styles.module.scss';

export function CellPhonePlan() {

    const {
        handleCellPhonePlan
    } = useCall()

    return (
        <div className={styles.container}>

            <label>Plano de telefone</label>

            <select
                data-testid="cell-phone-plan"
                className={styles.cell_phone_plan}
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
        </div>
    )
}