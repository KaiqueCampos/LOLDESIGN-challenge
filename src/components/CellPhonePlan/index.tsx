import { useCall } from "../../hooks/useCall"
import styles from './styles.module.scss';

export function CellPhonePlan() {

    const {
        handleCellPhonePlan
    } = useCall()

    return (
        <select
            className={styles.container}
            onChange={(e) => handleCellPhonePlan(e.target.value)}
        >
            <option>FaleMais 30</option>
            <option>FaleMais 60</option>
            <option>FaleMais 120</option>
        </select>
    )
}