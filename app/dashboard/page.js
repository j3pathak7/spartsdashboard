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
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#495A62", "#EC7471", "#65AEDD", "#9FD96C"];

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

const areaChartData = [
  { name: "A", value: 10 },
  { name: "B", value: 25 },
  { name: "C", value: 15 },
  { name: "D", value: 30 },
  { name: "E", value: 20 },
];

const pieChartData = [
  { name: "Category 1", value: 30 },
  { name: "Category 2", value: 20 },
  { name: "Category 3", value: 15 },
  { name: "Category 4", value: 35 },
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#fff"
      textAnchor="middle"
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-screen-lg flex flex-wrap justify-between">
        {/* Chart 1: Bar Chart */}
        <div className="chart-container bg-white p-4 shadow-md mb-2 rounded-md w-48%">
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

        {/* Chart 2: Line Chart */}
        <div className="chart-container bg-white p-4 shadow-md mb-2 rounded-md w-48%">
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

        {/* Chart 3: Area Chart */}
        <div className="chart-container bg-white p-4 shadow-md mb-2 rounded-md w-48%">
          <h2 className="text-lg font-semibold mb-4">Area Chart</h2>
          <AreaChart width={400} height={200} data={areaChartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#ccc" />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="value" fill={COLORS[2]} />
          </AreaChart>
        </div>

        {/* Chart 4: Pie Chart */}
        <div className="chart-container bg-white p-4 shadow-md mb-2 rounded-md w-48%">
          <h2 className="text-lg font-semibold mb-4">Pie Chart</h2>
          <PieChart width={400} height={200}>
            <Pie
              data={pieChartData}
              cx={200}
              cy={100}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill={COLORS[3]}
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Page;
