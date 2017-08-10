import React from 'react';

import * as d3 from "d3";
export default class Chart extends React.Component {


componentDidMount(){
 
   
    const data = this.props.data.map((vote)=>
        vote.votes
    )
    d3.select(".chart")
  .selectAll("div")
  .data(data)
    .enter()
    .append("div")
    .style("width", function(d) { return d * 5 + "px"; })
    .text(function(d) { return  + d; });
    }

render(){
    return(
        <div className='chart'>
    </div>

    )
    
}



}