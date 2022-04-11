import { useEffect, useState } from 'react'

const data = [
  {
    origin: "011",
    destination: "016",
    pricePerMinute: 1.90
  },
  {
    origin: "016",
    destination: "011",
    pricePerMinute: 2.90
  },
  {
    origin: "011",
    destination: "017",
    pricePerMinute: 1.70
  },
  {
    origin: "017",
    destination: "011",
    pricePerMinute: 2.70
  },
  {
    origin: "011",
    destination: "016",
    pricePerMinute: 0.90
  },
  {
    origin: "018",
    destination: "011",
    pricePerMinute: 1.90
  },
]

function App() {

  const [cellPhonePlan, setCellPhonePlan] = useState("FaleMais 30")
  const [callOrigin, setCallOrigin] = useState("")
  const [callDestination, setCallDestination] = useState("")
  const [connectionTime, setConnectionTime] = useState(0)
  const [priceWithoutPlan, setPriceWithoutPlan] = useState(0)
  const [priceWithPlan, setPriceWithPlan] = useState(0)

  function calculateCallValue() {
    const planDiscount = cellPhonePlan === "FaleMais 30"
      ? 30.00
      : (cellPhonePlan === "FaleMais 60" ? 60.00 : 120.00)

    const callInformation = data.filter(call => call.origin === callOrigin && call.destination === callDestination)

    const pricePerMinute = callInformation[0].pricePerMinute
    setPriceWithoutPlan(pricePerMinute * connectionTime)

    if (planDiscount < connectionTime) {
      const surplusMinutes = connectionTime - planDiscount
      const tariff = (pricePerMinute * 10) / 100

      setPriceWithPlan((surplusMinutes * (tariff + pricePerMinute)))

    } else {
      setPriceWithPlan(0)
    }
  }

  useEffect(() => {
    if (callOrigin !== "011") {
      setCallDestination("011")
    }
  }, [callOrigin])


  return (
    <div>

      <select
        onChange={(e) => setCallOrigin(e.target.value)}
      >
        <option>011</option>
        <option>016</option>
        <option>017</option>
        <option>018</option>
      </select>

      <select
        onChange={(e) => setCallDestination(e.target.value)}
      >
        {callOrigin === "011" ? (
          <>
            <option>016</option>
            <option>017</option>
            <option>018</option>
          </>
        ) : (
          <option>011</option>
        )}
      </select>

      <input
        type="number"
        onChange={(e) => setConnectionTime(parseInt(e.target.value))}
        required
      />

      <select
        onChange={(e) => setCellPhonePlan(e.target.value)}
      >
        <option>FaleMais 30</option>
        <option>FaleMais 60</option>
        <option>FaleMais 120</option>
      </select>

      <div>
        <h3>Preço sem o plano: ${priceWithoutPlan.toFixed(2)}</h3>
      </div>

      <div>
        <h3>Preço com {cellPhonePlan} é de: ${priceWithPlan.toFixed(2)}</h3>
      </div>

      <button
        onClick={calculateCallValue}
      >
        Calcular
      </button>
    </div>

  )
}

export default App
