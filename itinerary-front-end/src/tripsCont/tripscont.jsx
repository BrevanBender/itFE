import React, { useEffect, useState } from "react"
import apiUrl from "../apiconfig"
import IndiTrip from "./inditrip/inditrip"
import NewTrip from "./newtrip/newtrip"

const Tripscontainer = ()=>{
    const [trips, setTrips] = useState([])


    const getTrips = async ()=>{
        const tripResponse = await fetch(`${apiUrl}api/trips`)
        const parsedResponse = await tripResponse.json()
        console.log(parsedResponse)
        setTrips(parsedResponse)
    }
    const createNewTrip= async (newTrip)=>{
        try {

          const postResponse = await fetch(`${apiUrl}api/trips`, {
            method: 'POST',
            body: JSON.stringify(newTrip),
            headers: {
              "Content-Type": "application/json"
            }
          })
          const parsedResponse = await postResponse.json()
          console.log(parsedResponse)
          setTrips([
              ...trips,
              parsedResponse
          ])
        } catch (err) {
          console.log(err)
        }
      }



      const updateTrip = async(idToUpdate, tripToUpdate)=>{
        console.log(tripToUpdate)
        const editResponse = await fetch(`${apiUrl}api/trips/${idToUpdate}`,{
          method: "PUT",
          body: JSON.stringify(tripToUpdate),
          headers:{
            "Content-Type": "application/json"
          }
        })
        
        const parsedResponse = await editResponse.json()
        const newTrips = trips.map(trip =>trip.id===idToUpdate ? tripToUpdate : trip)
        setTrips(
            newTrips
        )
      }

      

    useEffect(() => {
        getTrips()}
        , [])


    return (
        <div>
            <NewTrip createNewTrip={createNewTrip}></NewTrip>
            {trips.map((trip)=>{
                return(
                <IndiTrip updateTrip={updateTrip} trip={trip}></IndiTrip>
                )
            })}
        </div>
    )
}

export default Tripscontainer