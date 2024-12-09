import React from "react";

function IncDec(){
    const [counter, setCounter] = React.useState(0);
    
    const incHandler = () => {
        setCounter(counter + 1);
    }

    const decHandler = () => {
        if(counter > 0){
            setCounter(counter - 1);
        }
    }
    
    const resetHandler = () => {
        setCounter(0);
    }

    return(
        <>
            <h1>Counter - {counter}</h1>
            <button onClick={incHandler}>Inc</button>
            <button onClick={decHandler}>Dec</button>
            <button onClick={resetHandler}>Resets</button>
        </>
    )
}
export default IncDec;