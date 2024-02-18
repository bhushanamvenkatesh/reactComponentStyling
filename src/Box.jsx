import React from "react";

function Box(t){
    let box={
        border:'1px solid red',
        textAlign:'center'
    }
    console.log(t)
    return <div className="box" style={box}>
        <h1>{t.arr.name}</h1>
        <p>{t.arr.age}</p>
        <p>{t.arr.gender}</p>

    </div>
}

export default Box