import { useContext } from "react"
import { CallContext } from "../contexts/callContext"

export function useCall() {
    const value = useContext(CallContext)
    return value
}