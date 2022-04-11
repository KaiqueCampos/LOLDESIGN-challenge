import { CellPhonePlan } from '../CellPhonePlan'
import { ConnectionTime } from '../ConnectionTime'
import { Destination } from '../Destination'
import { Origin } from '../Origin'
import styles from './styles.module.scss'

export function CallInformation() {
    return (
        <div className={styles.container}>
            <Origin />
            <Destination />
            <ConnectionTime />
            <CellPhonePlan />
        </div>
    )
}