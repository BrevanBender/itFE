import { useState } from "react"
import './edittrip.css'

const EditTrip = (props)=>{
    const[updateTrip, setUpdateTrip] = useState({
        name: props.trip.name,
        duration: props.trip.duration,
        overview: props.trip.overview,
        activities: props.trip.activities,
    })


    const handleInputChange = (e)=>{
        setUpdateTrip({
            ...updateTrip,
            [e.target.name]: e.target.value
        })
    }

    const submitUpdateTrip = (e)=>{
        e.preventDefault()
        props.updateTrip(props.trip.id, updateTrip)
        props.toggleEdit(false)
       
    }

    return(
        <form onSubmit={submitUpdateTrip} id="editForm">
            Trip Name: <input type='text'  name='name'onChange={handleInputChange} value={updateTrip.name}></input>
            <br />
            Trip Duration: <input type='text'  name='duration'onChange={handleInputChange} value={updateTrip.duration}></input>
            <br />
            Trip Summary: <input type='text'  name='overview'onChange={handleInputChange} value={updateTrip.overview}></input>
            <br />
            Activities: <input type='text' name='activities' onChange={handleInputChange} value={updateTrip.activities}></input>
            <br />
            <button type="submit">Update Trip!</button>
            <button id="closeEdit">X</button>
        </form>
    )
}
export default EditTrip