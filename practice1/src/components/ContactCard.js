import React from "react"
import "./css/Cards.css"

function ContactCard (props) {

    return (
        <div className = "cards">
            <h3>{props.contact.name}</h3>
            <p>{props.contact.email}</p>
            <p>{props.contact.age}</p>
            <p>{props.contact.city}</p>
        </div>
    )
}


export default ContactCard