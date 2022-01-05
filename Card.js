import React from "react"

export default function Card(props) {
    return(
        <>
        <div className="full-card">
               
        <img src={`./images/${props.item.imageUrl}`} className="place-img"/>
            <div className="content">
                    <div className="location-el">
                        <img src="../images/red-maps-pin.jpg" className="map-pin"/>
                        <span className="loc-name">{props.item.location}</span>
                        <a target="_blank" href={props.item.googleMapsUrl} className="anchor">View On Google Maps</a>
                    </div>
                <div className="text">
                    <h1 className="title-el">{props.item.title}</h1>
                    <h3 className="dates-el">{props.item.startDate} - {props.item.endDate}</h3>
                    <p className="desc-par">{props.item.description}</p>
                </div>
                
            </div>
           
        </div>
         <hr></hr>
         </>
    )
}

