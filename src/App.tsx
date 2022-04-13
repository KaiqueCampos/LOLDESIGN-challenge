import { CalculateCallValueButton } from './components/CalculateCallValueButton'
import { CallInformation } from './components/CallInformations'
import { FinalValues } from './components/FinalValues'
import { Title } from './components/Title'
import styles from "./styles/app.module.scss"
import "./styles/global.scss"

function App() {

  return (
    <div className={styles.container}>

      <Title/>
      <CallInformation />
      <FinalValues />
      <CalculateCallValueButton />

    </div>

  )
}

export default App
