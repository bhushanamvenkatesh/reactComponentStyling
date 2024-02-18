import React from "react";
import './heading.css'

function FlexBoxes(t){
    let names=t.arr
    return <div className="bg-container">
        {
            names.map((each,i)=><div key={i} className="each-box">{each}</div>)
        }
    </div>
       
}


export default FlexBoxes