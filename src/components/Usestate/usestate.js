import React, { useState } from 'react';
function LearnState(){
    const [inputValue,newInputValue] = useState('salman')
    console.log(inputValue);
    const onchange = (event)=>{
         const newValue = (event.target.value);
         newInputValue(newValue)
    }
    return (
        <>
        <h1>{inputValue}</h1>
        <input type="text" value={inputValue} placeholder="What's Your Name" onChange={onchange}/>
        </>
      );
}
export default LearnState