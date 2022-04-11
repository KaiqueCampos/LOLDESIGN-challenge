import { createContext, ReactNode, useEffect, useState } from "react"
import { data } from "../utils/data"

type CallContextData = {
    callOrigin: string,
    callDestination: string,
    connectionTime: number,
    cellPhonePlan: string,
    priceWithoutPlan: number,
    priceWithPlan: number,
    handleCallOrigin: (origin: string) => void,
    handleCallDestination: (destination: string) => void,
    handleConnectionTime: (connectionTime: number) => void,
    handleCellPhonePlan: (cellPhonePlan: string) => void,
    calculateCallValue: () => void,
}

export const CallContext = createContext({} as CallContextData)

type AppContextProviderProps = {
    children: ReactNode
}

export function CallContextProvider({ children }: AppContextProviderProps) {

    const [callOrigin, setCallOrigin] = useState("011")
    const [callDestination, setCallDestination] = useState("016")
    const [cellPhonePlan, setCellPhonePlan] = useState("")
    const [connectionTime, setConnectionTime] = useState(0)
    const [priceWithoutPlan, setPriceWithoutPlan] = useState(0)
    const [priceWithPlan, setPriceWithPlan] = useState(0)

    useEffect(() => {
        if (callOrigin !== "011") {
            handleCallDestination("011")
        }
    }, [callOrigin])

    function handleCallOrigin(origin: string) {
        setCallOrigin(origin)
    }

    function handleCallDestination(destination: string) {
        setCallDestination(destination)
    }

    function handleConnectionTime(connectionTime: number) {
        setConnectionTime(connectionTime)
    }

    function handleCellPhonePlan(cellPhonePlan: string) {
        setCellPhonePlan(cellPhonePlan)
    }

    function calculateCallValue() {

        const planDiscount = cellPhonePlan === "FaleMais 30"
            ? 30
            : (cellPhonePlan === "FaleMais 60" ? 60 : 120)

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

    return (
        <CallContext.Provider
            value={{
                priceWithPlan,
                priceWithoutPlan,
                cellPhonePlan,
                callOrigin,
                callDestination,
                connectionTime,
                handleCallOrigin,
                handleCallDestination,
                handleConnectionTime,
                handleCellPhonePlan,
                calculateCallValue
            }}
        >
            {children}
        </CallContext.Provider>
    )
}

