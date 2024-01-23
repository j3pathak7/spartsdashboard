"use client";
import { BiChevronDown } from "react-icons/bi";
import { IoMdDownload } from "react-icons/io";
import { Tooltip, Cell, BarChart, Bar, XAxis, YAxis, Legend } from "recharts";

const revenueData = [
  { month: "Jun '23", amount: 120000 },
  { month: "Jul '23", amount: 150000 },
  { month: "Aug '23", amount: 180000 },
];

const COLORS = ["#495A62", "#495A62", "#495A62"];
const studCOLORS = ["#6E7B83", "#6E7B83", "#6E7B83"];

const studentData = [
  { month: "Jun '23", amount: 150000 },
  { month: "Jul '23", amount: 170000 },
  { month: "Aug '23", amount: 100000 },
];

const Div4 = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="h-1/8 border-b border-gray-300 w-full flex flex-col sm:flex-row justify-between px-8 py-2 text-gray-700 items-center">
        <div className="mb-2 sm:mb-0">MONTH-ON-MONTH GROWTH</div>
        <div className="flex flex-col sm:flex-row items-center">
          <div className="relative text-sm mb-2 sm:mb-0">
            <label htmlFor="dropdown" className="sr-only">
              Select Time Interval
            </label>
            <select
              id="dropdown"
              name="dropdown"
              className="appearance-none bg-white border-2 border-gray-300 rounded px-4 py-1 leading-tight focus:outline-none mb-2 sm:mb-0 sm:mr-2"
            >
              <option value="last30days">Last 3 months</option>
              <option value="last15days">Last 2 months</option>
              <option value="last5days">Last month</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <BiChevronDown className="h-4 w-4 text-gray-500" />
            </div>
          </div>
          <button
            className="bg-gray-600 text-white ml-2 px-2 py-1 rounded-full"
            aria-label="Download"
          >
            <IoMdDownload />
          </button>
        </div>
      </div>
      <div className="h-7/8 flex flex-col sm:flex-row justify-center items-center">
        <div className="flex w-full sm:w-1/2 border-r border-gray-300 justify-center">
          <div className="items-center text-center">
            Revenue
            <BarChart width={200} height={200} data={revenueData}>
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis hide={true} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Bar dataKey="amount" fill="#495A62" name="FEE RECEIVED">
                {revenueData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </div>
        </div>
        <div className="flex w-full sm:w-1/2 justify-center">
          <div className="items-center text-center">
            Students
            <BarChart width={200} height={200} data={studentData}>
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis hide={true} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Bar dataKey="amount" fill="#6E7B83" name="ACTIVE STUDENTS">
                {revenueData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={studCOLORS[index % studCOLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Div4;
