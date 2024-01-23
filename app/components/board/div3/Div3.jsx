"use client";
import { BiChevronDown } from "react-icons/bi";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";

const data = [
  { name: "AMOUNT RECEIVED", value: 624000 },
  { name: "AMOUNT PENDING", value: 334000 },
];

const COLORS = ["#495A62", "#EC7471"];

const Div3 = () => {
  return (
    <div className="  flex flex-col items-center">
      <div className="h-1/8 border-b border-gray-300 w-full flex justify-between px-8 py-2 items-center text-gray-700">
        <div>FEE PAYMENT SUMMARY</div>
        <div className="relative text-sm">
          <select
            id="dropdown"
            name="dropdown"
            className="appearance-none bg-white border-2 border-gray-300 rounded px-3 py-1 pr-8 leading-tight focus:outline-none "
          >
            <option value="last30days">Last 30 days</option>
            <option value="last15days">Last 15 days</option>
            <option value="last5days">Last 5 days</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <BiChevronDown className="h-4 w-4 text-gray-500" />
          </div>
        </div>
      </div>
      <div className="h-7/8">
        <PieChart width={400} height={250}>
          <Pie
            data={data}
            cx={200}
            cy={100}
            innerRadius={30}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend wrapperStyle={{ fontSize: "12px" }} />
        </PieChart>
      </div>
    </div>
  );
};

export default Div3;
