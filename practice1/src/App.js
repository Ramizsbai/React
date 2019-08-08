import React from "react"
import ContactCard from "./components/ContactCard";

function App(){
    return(
        <div>
        <ContactCard
        contact = {{name: "Ramez:", email: "ramizsbai@hotmail.com", age: "25", city: "Berlin"}}
        />
        <ContactCard
        contact = {{name: "John:", email: "john@hotmail.com", age: "30", city: "Berlin"}}
        />
        <ContactCard
        contact = {{name: "Sarah:", email: "sarah@hotmail.com", age: "40", city: "Berlin"}}
        />
        <ContactCard
        contact = {{name: "Daniel:", email: "daniel@hotmail.com", age: "28", city: "Berlin"}}
        />
        </div>
    )
}

export default App