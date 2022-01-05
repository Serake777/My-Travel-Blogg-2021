import React from "react"
import NavBar from "./components/NavBar"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const theTravels = data.map(item => {
        return <Card 
        key={item.id}
        item={item}
        //title = {item.title}
       // location= {item.location}
        //googleMapsUrl= {item.googleMapsUrl}
        //startDate={item.startDate}
        //endDate={item.endDate}
       // description={item.description}
        //imageUrl={item.imageUrl}// 
        />
    })
    
    return(
        <div className="container">
        <NavBar />
        <section className = "elem-list">
       
       {theTravels}
        
        </section>
        </div>
    )
}


