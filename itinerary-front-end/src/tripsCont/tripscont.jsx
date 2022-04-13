import { useEffect, useState } from "react"
import apiUrl from "../apiconfig"

const Tripscontainer = ()=>{
    const [trips, setTrips] = useState([])
    const getTrips = async ()=>{
        const tripResponse = await fetch(`${apiUrl}api/trips`)
        const parsedResponse = await tripResponse.json()
        console.log(parsedResponse)
        setTrips(parsedResponse)
    }

    useEffect(() => {
        getTrips()}
        , [])


    return (
        <h1>Hello from Bali</h1>
    )
}

export default Tripscontainer