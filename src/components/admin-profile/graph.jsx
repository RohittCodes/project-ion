import React, { useState } from "react";
import Chart from "react-apexcharts";

const Graph = () => {
  const [selectedYear, setSelectedYear] = useState(() =>
    new Date().getFullYear()
  );

  const chartData = [
    {
      year: 2023,
      name: "Total Projects",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 34, 3, 34, 55],
    },
    {
      year: 2022,
      name: "Total Projects",
      data: [25, 40, 45, 50, 49, 60, 70, 75, 34, 3, 34, 55],
    },
    {
      year: 2021,
      name: "Total Projects",
      data: [25, 40, 45, 50, 49, 60, 70, 75, 34, 3, 34, 1],
    },
  ];

  const filteredChartData = chartData.find(
    (item) => item.year === parseInt(selectedYear)
  );

  const seriesData = filteredChartData
    ? filteredChartData.data.map((value) => Math.round(value))
    : [];

  const options = {
    chart: {
      id: "line-chart",
      animations: {
        enabled: true,
        dynamicAnimation: {
          speed: 300,
        },
      },
    },
    xaxis: {
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
    yaxis: {
      labels: {
        formatter: function (val) {
          return Math.round(val); // Display whole numbers on the Y-axis
        },
      },
    },
    theme: {
      mode: "dark", // Use dark theme to ensure white text is visible
    },
  };

  const styles = {
    container: {
      margin: "10px",
      height: "auto",
      backgroundColor: "#333",
      width: "600px",
      color: "#fff",
      padding: "20px",
      overflow: "hidden",
      borderRadius: "10px",
      border: "1px solid #fff",
      boxShadow: "4px 4px 10px rgba(0, 0, 0, 1)",
    },
  };

  return (
    <div style={styles.container}>
      <div className="flex flex-row items-center justify-between px-2">
        <div className="text-2xl font-bold font-mono text-gray-400">
          Projects
        </div>
        <select
          className="bg-background-components text-text-disabled border-border-secondary border-[1px] rounded-md px-1 focus:outline-none"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value={2023}>2023</option>
          <option value={2022}>2022</option>
          <option value={2021}>2021</option>
        </select>
      </div>
      <Chart
        options={options}
        series={[{ name: "Total Projects", data: seriesData }]}
        type="line"
        height="250"
        className="flex justify-center h-2/3"
      />
    </div>
  );
};

export default Graph;
