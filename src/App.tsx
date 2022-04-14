import { CalculateCallValueButton } from './components/CalculateCallValueButton'
import { CallInformation } from './components/CallInformations'
import { FinalValues } from './components/FinalValues'
import { Title } from './components/Title'
import styles from "./styles/app.module.scss"
import "./styles/global.scss"
import animate from  "./styles/animate.module.scss"

function App() {

  return (
    <div className={styles.container_background}>

      <div className={`${styles.container} ${animate.up1}`}>
        <Title />
        <CallInformation />
        <FinalValues />
        <CalculateCallValueButton />
      </div>
    </div>

  )
}

export default App
