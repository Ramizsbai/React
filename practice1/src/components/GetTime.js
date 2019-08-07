import React from "react"

function GetTime () {

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if(hours < 12){
        timeOfDay = " Morning"
    }else if (hours >= 12 && hours < 17){
        timeOfDay = " after noon"
    }else{
        timeOfDay = " night"
    }

    return(<h3>Good {timeOfDay} !</h3>)

}

export default GetTime