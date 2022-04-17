import { useState } from "react"
import EditTrip from "./edittrip/edittrip"
import './inditrip.css'

const IndiTrip = (props)=>{
    const [showEdit, setShowEdit] = useState(false)
    const toggleEdit = ()=>{
        setShowEdit(!showEdit)
      }
    return(
        <div className="indiCont">
            <div>
                <h3>{props.trip.name}</h3>
                <h4>Duration: {props.trip.duration}</h4>
                <p>Summary: {props.trip.overview}</p>
                <p>Plans: {props.trip.activities}</p>
            </div>  
            <div id="buttonsDiv">
                {!showEdit?
                    <button onClick={toggleEdit}>Edit This Trip</button>
                :
                    <EditTrip toggleEdit={toggleEdit} updateTrip={props.updateTrip} trip={props.trip}></EditTrip>
                }
                <button onClick={()=>{props.deleteTrip(props.trip.id)}}>Delete Trip</button>
            </div>
        </div>
    )
}
export default IndiTrip