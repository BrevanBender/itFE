import { useState } from "react"
import './newtrip.css'

const NewTrip = (props) =>{

const [showNew, setShowNew] = useState(false)
const toggleNew = ()=>{
  setShowNew(!showNew)
}

const[newTrip, setNewTrip] = useState({
    name: '',
    duration: '',
    overview: '',
    activities: '',
})
const handleInputChange = (e)=>{
    setNewTrip({
        ...newTrip,
        [e.target.name]: e.target.value
    })
}
return(
<div className="newTrip">
    {!showNew ?
    <button id="newButton" onClick={toggleNew}>+</button>
    :
    <div id="newform">
    <button id="closeNew" onClick={toggleNew}>X</button>
    <form onSubmit={(e)=>{
        e.preventDefault()
        props.createNewTrip(newTrip)
        setNewTrip({
            name: '',
            duration: '',
            overview: '',
            activities: '',
        })
        }}>
        Trip Name: <input type='text'  name='name'onChange={handleInputChange} value={newTrip.name}></input>
        <br />
        Trip Duration: <input type='text'  name='duration'onChange={handleInputChange} value={newTrip.duration}></input>
        <br />
        Trip Summary: <input type='text'  name='overview'onChange={handleInputChange} value={newTrip.overview}></input>
        <br />
        Activities: <input type='text' name='activities' onChange={handleInputChange} value={newTrip.activities}></input>
        <br />
        <button type="submit">Post Trip!</button>
    </form>
    </div>
    }   
</div>
)
}
export default NewTrip