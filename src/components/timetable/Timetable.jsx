import React, { useCallback, useEffect, useState } from "react";
import * as d3 from "d3";
import { Coordinates } from "./coordinates";
import { Arrows } from "./arrows";

export const Timetable = () => {
  const [startPoint, setStartPoint] = useState(null);

  const [coordinatesData, setCoordinatesData] = useState([]);

  const renderCoordinates = useCallback(() => {
    const zoomed = ({ transform }) => {
      d3.select("#zoom-box")
        .attr("transform", transform)
        .attr("stroke-width", 0.1 / transform.k);
      d3.select("#arrows-line").attr("stroke-width", 2 / transform.k);
    };

    const zoom = d3.zoom().scaleExtent([1, 200]).on("zoom", zoomed);
    const svg = d3.select("#timetable");
    svg.call(zoom).call(zoom.transform, d3.zoomIdentity);
  }, []);

  console.log("render");

  const handler = (e) => {
    const cell = e.target;
    if (!startPoint) {
      setStartPoint({
        x: +cell.getAttribute("x") + 10,
        y: +cell.getAttribute("y") + 10,
      });
    } else {
      setCoordinatesData((state) => {
        return [
          ...state,
          {
            x1: startPoint.x,
            y1: startPoint.y,
            x2: +cell.getAttribute("x") + 10,
            y2: +cell.getAttribute("y") + 10,
          },
        ];
      });
      setStartPoint(null);
    }
  };

  useEffect(() => {
    renderCoordinates();
  }, [renderCoordinates]);

  return (
    <div id="box">
      <svg id="timetable" width="100%" height="100vh">
        <g id="zoom-box">
          <g onClick={(e) => handler(e)} id="coordinates" fill="#ece62473">
            <Coordinates />
          </g>
          <Arrows coordinatesData={coordinatesData} />
        </g>
      </svg>
    </div>
  );
};
