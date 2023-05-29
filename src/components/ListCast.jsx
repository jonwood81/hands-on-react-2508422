import {useState } from "react";

//pass member info along using the "onChoice" event.  This is triggered by the "onChoice" ...
//..in the 'export default' line below and in the "onClick" within the <a> tag/element below...
export default ({cast, onChoice}) => {
    //Show the cast images (cartoon aliens) in a grid format.  Also add a tooltip ...
    //...that displays the name of the member when the user hovers over an image. 
    //This uses the "member id" that each member has in "cast.json" 
		return (
		  <div style={{
		    display: "grid",
		    gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
		    gap: `1rem`,
		    marginBottom: `1rem`
		  }}>
		    {
		      cast.map(member => (
		        <a onClick={ () => {onChoice(member)}} key={member.id} data-tooltip={member.name}> 
		        <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
		        </a>
		      ))
		    }
		  </div>
		)

}
/*
export default ({ cast, onChoice }) => {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
      gap: `1rem`,
      marginBottom: '1rem'
    }}>
      {
        cast.map(member => (
          <a onClick={() => { onChoice(member) }} key={member.id} data-tooltip={member.name}>
            <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
          </a>
        ))
      }
    </div>
  )
}
*/