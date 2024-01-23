"use client";
import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#495A62", "#EC7471"];

const barChartData = [
  { name: "Category 1", value: 30 },
  { name: "Category 2", value: 45 },
  { name: "Category 3", value: 60 },
  { name: "Category 4", value: 25 },
];

const lineChartData = [
  { name: "Jan", value: 20 },
  { name: "Feb", value: 35 },
  { name: "Mar", value: 40 },
  { name: "Apr", value: 30 },
  { name: "May", value: 45 },
];

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-screen-lg">
        <div className="chart-container bg-white p-4 shadow-md mb-4 rounded-md">
          <h2 className="text-lg font-semibold mb-4">Bar Chart</h2>
          <BarChart width={400} height={200} data={barChartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#ccc" />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill={COLORS[0]} />
          </BarChart>
        </div>

        <div className="chart-container bg-white p-4 shadow-md mb-4 rounded-md">
          <h2 className="text-lg font-semibold mb-4">Line Chart</h2>
          <LineChart width={400} height={200} data={lineChartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#ccc" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke={COLORS[1]} />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Page;
