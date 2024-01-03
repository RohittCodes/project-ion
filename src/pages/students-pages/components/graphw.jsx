import React from "react";
import Chart from "react-apexcharts";

const Graphw = () => {
  const data = [
    {
      label: "EASY",
      value: 10,
    },
    {
      label: "MED",
      value: 20,
    },
    {
      label: "HIGH",
      value: 30,
    },
  ];

  const options = {
    labels: data.map((item) => item.label),
  };

  const styles = {
    container: {
      margin: "10px",
      minHeight: "auto",
      backgroundColor: "#333",
      width: "500px",
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
      <div className="text-2xl font-bold font-mono text-gray-400">
        SOLVED PROJECTS
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Chart
          options={options}
          series={data.map((item) => item.value)}
          type="pie"
          width="380"
        />
      </div>
    </div>
  );
};

export default Graphw;
