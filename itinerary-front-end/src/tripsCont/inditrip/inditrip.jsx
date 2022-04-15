import { useState } from "react"
import EditTrip from "./edittrip/edittrip"

const IndiTrip = (props)=>{
    const [showEdit, setShowEdit] = useState(false)
    const toggleEdit = ()=>{
        setShowEdit(!showEdit)
      }
    return(
        <div className="indiCont">
            <div>
                <h3>{props.trip.name}</h3>
                <h4>{props.trip.duration}</h4>
                <p>{props.trip.overview}</p>
                <p>{props.trip.activities}</p>
            </div>  

            {!showEdit?
                <button onClick={toggleEdit}>Edit This <Trip></Trip></button>
            :
                <EditTrip toggleEdit={toggleEdit} updateTrip={props.updateTrip} trip={props.trip}></EditTrip>
            }
            <button onClick={()=>{props.deleteTrip(props.trip.id)}}>Delete Trip</button>
        </div>
    )
}
export default IndiTrip