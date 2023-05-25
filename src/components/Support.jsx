import { useState, useEffect } from 'react';
const pageTitle = document.title;

export default () => {
  //This is declaring const variable in memory and methods (count, setCount) to ... 
  //...modify it (an array in this case),  and initializing with the '0' value.
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (count > 0) {
      document.title = `${pageTitle}--${count}`;
    }
  })
  return (
    <button className="outline" onClick={() => setCount(count +1)}>
      {(()=>{
        if (count === 0){
          return "click to support";
        } else {
          return `Supported ${count} times`; //Uses ES6 templating tick-marks " `` "
        }
      })()}
    </button>
    // Using ternary statement ...
    //{count === 0? "click to support": `Supported ${count} times`}
    //...the same can be accomplished with a shorter format 
  )
}