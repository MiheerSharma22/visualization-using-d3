import React, { useEffect } from "react";
import * as d3 from "d3";

const ScatterPlot = ({ data, width, height }) => {
  console.log(data);
  useEffect(() => {
    drawChart();
    //eslint-disable-next-line
  }, [data]);

  function drawChart() {
    // Add logic to draw the chart here
    d3.select("#container").select("svg").remove();
    d3.select("#container").select(".tooltip").remove();

    const margin = { top: 50, right: 50, bottom: 50, left: 50 };

    const svg = d3
      .select("#container")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Add X axis
    const x = d3.scaleLinear().domain([0, 10]).range([0, width]);
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .attr("class", "axisText")
      .call(d3.axisBottom(x));

    // Add Y axis
    const y = d3.scaleLinear().domain([0, 100]).range([height, 0]);
    svg.append("g").attr("class", "axisText").call(d3.axisLeft(y));

    svg
      .append("g")
      .selectAll("dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return x(d.likelihood);
      })
      .attr("cy", function (d) {
        return y(d.intensity);
      })
      .attr("r", 3)
      .style("fill", "#7367f0");

    // const focus = svg
    //   .append("g")
    //   .attr("class", "focus")
    //   .style("display", "none");
    // focus.append("circle").attr("r", 5).attr("class", "circle");

    const tooltip = d3
      .select("#container")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);
  }

  return (
    <div className="w-9/12 mx-auto flex flex-col border border-borderColor px-[1.3rem] py-[0.75rem] rounded-lg">
      <p className="text-textColor text-xl font-medium">Scatter Chart</p>
      <div id="container" className="place-self-center "></div>
    </div>
  );
};

export default ScatterPlot;
