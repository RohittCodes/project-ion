import React, { Component } from "react";
import Chart from "react-apexcharts";

const ProjectSumissionGraph = () => {
  const state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  return (
    <div className="w-full h-56 bg-background-components rounded-2xl border-border-secondary border-[1px]">
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        height="200"
        width="300"
      />
    </div>
  );
};

export default ProjectSumissionGraph;
