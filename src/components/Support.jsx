import { useState } from 'react';

export default () => {
  //This is declaring const variable in memory and methods (count, setCount) to ... 
  //...modify it (an array in this case),  and initializing with the '0' value.
  const [count, setCount] = useState(0)
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
  )
}