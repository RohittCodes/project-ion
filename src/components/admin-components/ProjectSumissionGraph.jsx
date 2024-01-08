import React, { Component, useState } from "react";
import Chart from "react-apexcharts";
import { IoMdArrowForward } from "react-icons/io";

const ProjectSumissionGraph = (props) => {
  console.log(props.data)
  let dates = []
  props.data.map(each => dates.push(each.data.Date))
  let months = []
  dates.map(each => {
    let temp = new Date(each)
    months.push(temp.getMonth() + 1)
  })
  
  months.sort((a,b) =>a - b)
  console.log(months)
  const countMap = {};

  months.forEach((num) => {
    countMap[num] = (countMap[num] || 0) + 1;
  });

  const countArray = Array.from({ length: Math.max(...months) + 1 }, (_, i) => countMap[i] || 0);
  countArray.shift()
  console.log(countArray);


  const [selectedYear, setSelectedYear] = useState(() =>
    new Date().getFullYear()
  );

  const chartData = [
    {
      year: 2023,
      name: "Total Projects",
      data: countArray,
    },

  ];

  const filteredChartData = chartData.find(
    (item) => item.year === parseInt(2023)
  );

  const seriesData = filteredChartData ? filteredChartData.data : [];

  const state = {
    options: {
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        show: true,
        labels: {
          style: {
            colors: "#eeeeee",
          },
        },
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      grid: {
        show: false,
      },
      yaxis: {
        show: false,
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
    },
  };

  return (
    <div className="flex flex-col w-full h-60 bg-background-components px-3 pt-2 rounded-2xl border-border-secondary border-[1px]" >
      <div className="flex flex-row items-center justify-between px-2">
        <div className="text-2xl font-bold font-mono text-gray-400">
          Projects
        </div>
        <select
          className="bg-background-components text-text-disabled border-border-secondary border-[1px] rounded-md px-1 focus:outline-none"
          value={selectedYear}
          onChange={(e) => setSelectedYear(2023)}
        >
          <option value={2023}>2023</option>
        </select>
      </div>
      <Chart
        options={state.options}
        series={[{ name: "Total Projects", data: seriesData }]}
        type="bar"
        height="200"
        className="flex justify-center w-full h-2/3" 
        
        
      />
    </div>
  );
};

export default ProjectSumissionGraph;
