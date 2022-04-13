

const IndiTrip = (props)=>{
    return(
        <div>
            <h3>{props.trip.name}</h3>
            <h4>{props.trip.duration}</h4>
            <p>{props.trip.overview}</p>
            <p>{props.trip.activities}</p>
        </div>
    )
}