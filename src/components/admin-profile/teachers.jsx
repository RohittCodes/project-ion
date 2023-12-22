import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import profilePhoto from "./head.jpg";

// Sample profile photo URL (replace with your actual photo URL)
const sampleProfilePhotoUrl = "https://example.com/your-photo.jpg";

const Data = () => {
  const tableFields = ["Profile", "Professor Details"];
  const professorsData = [
    {
      id: 10000001,
      name: "John Doe",
      profession: "Professor of Computer bScience",
    },
    {
      id: 10000002,
      name: "John",
      profession: "Professor of Science",
    },
    {
      id: 10000003,
      name: "Jason",
      profession: "Professor of AI",
    },
    {
      id: 10000004,
      name: "Jason",
      profession: "Professor of AI",
    },
    {
      id: 10000005,
      name: "Jason",
      profession: "Professor of AI",
    },
    {
      id: 10000006,
      name: "Jason",
      profession: "Professor of AI",
    },
    // Add more professors data here...
  ];
  const styles = {
    container: {
      margin: "20px",
      padding: "10px",
      height: "auto",
      width: "400px",
      display: "inline-block",
      backgroundColor: "#333",
      color: "#fff",
      overflow: "hidden",
      borderRadius: "10px",
      border: "1px solid #fff",
      boxShadow: "4px 4px 10px rgba(0, 0, 0, 1)",
    },
  };

  return (
    <div style={styles.container}>
      <div className="flex flex-row items-center justify-between px-2 text-2xl font-bold font-mono text-gray-400">
        <div>Professors List</div>
        <IoArrowForwardCircleOutline className="cursor-pointer" />
      </div>
      <div className="w-full px-2">
        <table className="w-full border-separate">
          <thead className="table-header-group text-text-secondary">
            <tr>
              {tableFields.map((field) => (
                <th
                  className={`text-center ${
                    field === "Profile" ? "w-15" : "w-75"
                  }`}
                  key={field}
                >
                  {field}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="text-center text-text-disabled">
            {professorsData.map((data) => (
              <tr key={data.id}>
                <td className="py-3">
                  {" "}
                  {/* Add padding on the y-axis for vertical spacing */}
                  <div className="flex items-center justify-center">
                    <img
                      src={profilePhoto}
                      alt={`Profile of ${data.name}`}
                      className="w-8 h-8 rounded-full"
                    />
                  </div>
                </td>
                <td className="py-3 border-b">
                  {" "}
                  {/* Add padding on the y-axis for vertical spacing */}
                  <NavLink to={"/profile/" + data.id}>{data.name}</NavLink>
                  <div>{data.profession}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Data;
