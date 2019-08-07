import React from "react"
import ReactDom from "react-dom"
import Nav from "./components/Nav"
import GetTime from "./components/GetTime"

ReactDom.render(

<div>
<h1>Hello world</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, 
    praesentium! Architecto in atque cumque magni animi excepturi nisi sunt. Voluptatibus.
</p>
<Nav/>
<GetTime/>
</div>
, document.getElementById("root"))

