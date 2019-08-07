import React from "react"

function GetTime () {

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
        fontSize: 40 
    }

    if(hours < 12){
        timeOfDay = " Morning"
        styles.color = "red"
    }else if (hours >= 12 && hours < 17){
        timeOfDay = " after noon"
        styles.color = "blue"
    }else{
        timeOfDay = " night"
        styles.color = "green"
    }

    return(<h3 style={styles}>Good {timeOfDay} !</h3>)

}

export default GetTime