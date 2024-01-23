"use client";
import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { TbDots } from "react-icons/tb";

const DynamicTable = ({ data }) => {
  return (
    <table className="w-full">
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="border-b">
            <td key={`cell-checkbox-${rowIndex}`} className="p-2">
              <input type="checkbox" />
            </td>
            {row.map((cell, cellIndex) => (
              <td key={`cell-${rowIndex}-${cellIndex}`} className="p-2">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Div5 = () => {
  const [filter, setFilter] = useState("All"); // Default filter

  const sampleDataClasses = [
    [
      "Mon, 05 Sept",
      "2:30 PM - 3:30 PM",
      "Intermediate Tennis Class",
      "Emma W and 120 more",
      "View",
    ],
    [
      "Wed, 07 Sept",
      "4:00 PM - 5:00 PM",
      "Advanced Chess Workshop",
      "Alex M and 90 more",
      "View",
    ],
  ];

  const sampleDataMeetings = [
    [
      "Tue, 10 Sept",
      "10:00 AM - 11:00 AM",
      "Team Meeting",
      "John D and 15 more",
      "View",
    ],
    [
      "Thu, 12 Sept",
      "3:00 PM - 4:00 PM",
      "Client Presentation",
      "Jane S and 25 more",
      "View",
    ],
  ];

  const sampleDataEvents = [
    [
      "Sat, 15 Sept",
      "7:00 PM - 9:00 PM",
      "Concert in the Park",
      "Local Band and Special Guests",
      "Buy Tickets",
    ],
    [
      "Sun, 23 Sept",
      "2:00 PM - 4:00 PM",
      "Community Fair",
      "Food, Games, and Fun for All",
      "More Info",
    ],
  ];

  const sampleDataAll = [
    [
      "Fri, 01 Sept",
      "3:00 PM - 4:00 PM",
      "Beginners Badminton Class",
      "Jonas K and 151 more",
      "View",
    ],
    [
      "Mon, 05 Sept",
      "2:30 PM - 3:30 PM",
      "Intermediate Tennis Class",
      "Emma W and 120 more",
      "View",
    ],
    [
      "Wed, 07 Sept",
      "4:00 PM - 5:00 PM",
      "Advanced Chess Workshop",
      "Alex M and 90 more",
      "View",
    ],
    [
      "Thu, 15 Sept",
      "3:30 PM - 4:30 PM",
      "Swimming Lessons",
      "Sophia L and 200 more",
      "View",
    ],
    [
      "Tue, 20 Sept",
      "5:00 PM - 6:00 PM",
      "Football Practice",
      "Daniel H and 180 more",
      "View",
    ],
    [
      "Sat, 25 Sept",
      "6:00 PM - 7:00 PM",
      "Basketball Training",
      "Olivia G and 160 more",
      "View",
    ],
  ];

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const getFilteredData = () => {
    switch (filter) {
      case "Classes":
        return sampleDataClasses;
      case "Meetings":
        return sampleDataMeetings;
      case "Events":
        return sampleDataEvents;
      default:
        return sampleDataAll;
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row justify-between border-b border-gray-300 items-center">
        <div className="p-4">UPCOMING SCHEDULE</div>
        <div className="flex text-sm text-white items-center flex-wrap">
          <CiFilter size={24} style={{ color: "black" }} />
          <button
            className={`bg-gray-400 m-2 p-2 rounded-xl w-full md:w-24 ${
              filter === "All" && "bg-gray-800"
            }`}
            onClick={() => handleFilterChange("All")}
          >
            All
          </button>
          <button
            className={`bg-gray-400 m-2 p-2 rounded-xl w-full md:w-24 ${
              filter === "Classes" && "bg-gray-800"
            }`}
            onClick={() => handleFilterChange("Classes")}
          >
            Classes
          </button>
          <button
            className={`bg-gray-400 m-2 p-2 rounded-xl w-full md:w-24 ${
              filter === "Meetings" && "bg-gray-800"
            }`}
            onClick={() => handleFilterChange("Meetings")}
          >
            Meetings
          </button>
          <button
            className={`bg-gray-400 m-2 p-2 rounded-xl w-full md:w-24 ${
              filter === "Events" && "bg-gray-800"
            }`}
            onClick={() => handleFilterChange("Events")}
          >
            Events
          </button>
        </div>
        <div className="m-2 mx-4">
          <TbDots size={32} />
        </div>
      </div>
      <DynamicTable data={getFilteredData()} />
    </div>
  );
};

export default Div5;
