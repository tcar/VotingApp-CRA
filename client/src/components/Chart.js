import React from 'react';

import * as d3 from "d3";
export default class Chart extends React.Component {


componentDidMount(){


 const data = this.props.data
    console.log(data)

var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 600 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

var x = d3.scaleBand() 
        .rangeRound([0, width])
        .domain(data.map((d)=>{return d.answear})).paddingInner(0.1)


var y = d3.scaleLinear()
        .range([height, 0])
        .domain([0,d3.max(data, (d)=>{return d.votes})])

const xAxis = d3.axisBottom(x)




const chart= d3.select('.chart')
                .append('svg')
                 .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



chart.append('g')
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .attr('stroke', 'black')
 



  chart.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", "steelblue")
    .attr("x", function(d) { return x(d.answear); })
      .attr("width", x.bandwidth())
      .attr("y", function(d) { return y(d.votes); })
      .attr("height", function(d) { return height - y(d.votes); });

        




                
}

render(){
    return(
        <div className='chart'>
    </div>

    )
    
}
}