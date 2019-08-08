import React from "react"

function ContactCard (props) {

    return (
        <div className = "cards">
            <h3>{props.contact.name}</h3>
            <p>{props.contact.email}</p>
            <p>{props.contact.age}</p>
        </div>
    )
}


export default ContactCard