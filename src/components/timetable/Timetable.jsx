import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const renderSvg = () => {
  const zoom = d3.zoom().scaleExtent([1, 2000]).on("zoom", zoomed);

  const svg = d3
    .select("#box")
    .append("svg")
    .attr("width", '100%')
    .attr("height", '100vh');

  const gDot = svg
    .append("g")
    .attr("fill", "none")
    .attr("stroke-linecap", "round")
    .attr('fill', '#ece62473')

  svg.call(zoom).call(zoom.transform, d3.zoomIdentity);

  for (let i = 0; i < 100; i++) {

    for(let j = 0; j < 100; j++) {
      gDot
      .append("rect")
      .attr("width", 20)
      .attr("height", 20)
      .attr('x', j*20)
      .attr('id', `${i}${j}`)
      .attr('y', i*20)
      .attr("stroke", "#000");
    }
    
  }

  function zoomed({ transform }) {
    gDot.attr("transform", transform).attr("stroke-width", 0.1 / transform.k);
  }
};

export const Timetable = () => {
  useEffect(() => {
    renderSvg();
  }, []);

  return <div id="box" onClick={(e) => console.log(e.target.id)}></div>;
};
