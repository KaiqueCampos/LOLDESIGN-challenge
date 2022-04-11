import { CalculateCallValueButton } from './components/CalculateCallValueButton'
import { CellPhonePlan } from './components/CellPhonePlan'
import { ConnectionTime } from './components/ConnectionTime'
import { Destination } from './components/Destination'
import { FinalValues } from './components/FinalValues'
import { Origin } from './components/Origin'

function App() {

  return (
    <div>

      <Origin />
      <Destination />
      <ConnectionTime />
      <CellPhonePlan/>
      <FinalValues />
      <CalculateCallValueButton />

    </div>

  )
}

export default App
