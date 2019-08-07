import React from "react";
import "./css/Nav.css";

class Nav extends React.Component {

    render(){
        return(
            <nav>
            <ul  className = "nav">
             <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            </ul>
            </nav>
         
        )
    }

}

export default Nav