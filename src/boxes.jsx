import React from "react";
import './boxes.css'


function Boxes(t) {
    console.log(t.arr)
    return <div className="container">
        {
            t.arr.map((each) => <div className="eachbox">
                <h1>{`name: ${each.name}`}</h1>
                <h1>{`age: ${each.age}`}</h1>
                <h1>{`gender: ${each.gender}`}</h1>
                <h1>{`city: ${each.city}`}</h1>




            </div>)
        }

    </div>

}
export default Boxes