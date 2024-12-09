import React, { useState } from "react";

function Shubham(props){
    
    const [title , setTitle] = useState(props.name);
    function clickHandler(){
        setTitle("Ram");
    }
    return (
        <>
        <h1>Hello {title} how are you</h1>
        <button onClick={clickHandler}>Click Me</button>
        </>
    )
}

export default Shubham;