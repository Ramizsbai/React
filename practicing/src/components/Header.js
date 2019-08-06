import React from "react";
import"./css/Header.css";
/* React.createElement("div", {}, React.createElement("h2", {}, "HEADER")) */
class Header extends React.Component{
    render(){
        const dataArray = ["item1","item2","item3"]
        return(<nav className="navigation">
            <h2>HEADER</h2>
            <ul className = "navigation-ul">
                <li>{dataArray[0]}</li>
                <li>{dataArray[1]}</li>
                <li>{dataArray[2]}</li>
                
            </ul>
            </nav>);
    }
        
        
    
} 

export default Header