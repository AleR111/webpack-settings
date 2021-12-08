import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const renderSvg = () => {
  const zoom = d3.zoom().scaleExtent([0.5, 2]).on("zoom", zoomed);

  const svg = d3
    .select("#box")
    .append("svg")
    .attr("width", 460)
    .attr("height", 460);

  const gDot = svg
    .append("g")
    .attr("fill", "none")
    .attr("stroke-linecap", "round")
    

    svg.call(zoom).call(zoom.transform, d3.zoomIdentity)

    gDot.append("circle")
    .attr("cx", 300)
    .attr("cy", 300)
    .attr("r", 40)
    .style("fill", "#68b2a1");
    gDot.append("rect")
    .attr("width", 300)
    .attr("y", 300)
    .attr("height", 50)
    .style("fill", "#68b2a1");

  function zoomed({ transform }) {
    gDot.attr("transform", transform).attr("stroke-width", 20 / transform.k);
  }
};

export const Timetable = () => {
  useEffect(() => {
    renderSvg();
  }, []);

  return <div id="box"></div>;
};
