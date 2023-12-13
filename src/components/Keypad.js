// Code Keypad Component Here
import React from "react";

function Keypad (){
   const handleClick = (e) => {
        console.log('Entering password...')
    }
    return (
        <div>
            <input type="password" onChange={handleClick} />
        </div>
    )
}

export default Keypad;