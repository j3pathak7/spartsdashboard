"use client";
import React, { useState } from "react";

const studentsData = [
  { id: 1, name: "Aarav Kumar", age: 7, sport: "Cricket" },
  { id: 2, name: "Aditi Singh", age: 10, sport: "Football" },
  { id: 3, name: "Vikram Sharma", age: 8, sport: "Basketball" },
  { id: 4, name: "Riya Patel", age: 6, sport: "Badminton" },
  { id: 5, name: "Kabir Gupta", age: 12, sport: "Chess" },
  { id: 6, name: "Anaya Reddy", age: 5, sport: "Football" },
  { id: 7, name: "Advait Kapoor", age: 14, sport: "Cricket" },
  { id: 8, name: "Sara Choudhary", age: 13, sport: "Basketball" },
  { id: 9, name: "Aryan Thakur", age: 6, sport: "Badminton" },
  { id: 10, name: "Ishita Verma", age: 9, sport: "Chess" },
  { id: 11, name: "Aarush Joshi", age: 11, sport: "Tennis" },
  { id: 12, name: "Avni Kapoor", age: 7, sport: "Table Tennis" },
  { id: 13, name: "Arjun Gupta", age: 9, sport: "Swimming" },
  { id: 14, name: "Ananya Singh", age: 8, sport: "Volleyball" },
  { id: 15, name: "Aisha Khan", age: 12, sport: "Football" },
  { id: 16, name: "Arya Mehra", age: 6, sport: "Badminton" },
  { id: 17, name: "Aditya Verma", age: 13, sport: "Cricket" },
  { id: 18, name: "Kiara Sharma", age: 10, sport: "Chess" },
  { id: 19, name: "Kabir Kapoor", age: 7, sport: "Basketball" },
  { id: 20, name: "Zara Ahmed", age: 11, sport: "Tennis" },
  { id: 21, name: "Rehan Khan", age: 8, sport: "Football" },
  { id: 22, name: "Meera Reddy", age: 9, sport: "Table Tennis" },
  { id: 23, name: "Ansh Thakur", age: 5, sport: "Badminton" },
  { id: 24, name: "Aisha Mehra", age: 12, sport: "Volleyball" },
  { id: 25, name: "Aryan Verma", age: 7, sport: "Cricket" },
  { id: 26, name: "Samaira Singh", age: 10, sport: "Chess" },
  { id: 27, name: "Rishaan Gupta", age: 6, sport: "Basketball" },
  { id: 28, name: "Saanvi Patel", age: 9, sport: "Swimming" },
  { id: 29, name: "Arnav Choudhary", age: 11, sport: "Football" },
  { id: 30, name: "Aaliyah Sharma", age: 8, sport: "Table Tennis" },
  { id: 31, name: "Arush Thakur", age: 13, sport: "Cricket" },
  { id: 32, name: "Anvi Kapoor", age: 10, sport: "Volleyball" },
  { id: 33, name: "Aarav Joshi", age: 6, sport: "Badminton" },
  { id: 34, name: "Aisha Singh", age: 9, sport: "Chess" },
  { id: 35, name: "Advika Verma", age: 12, sport: "Basketball" },
  { id: 36, name: "Vihaan Mehra", age: 8, sport: "Tennis" },
  { id: 37, name: "Kyra Gupta", age: 11, sport: "Swimming" },
  { id: 38, name: "Aaradhya Patel", age: 7, sport: "Football" },
  { id: 39, name: "Ayaan Shah", age: 9, sport: "Table Tennis" },
  { id: 40, name: "Myra Verma", age: 8, sport: "Basketball" },
  { id: 41, name: "Arham Singh", age: 7, sport: "Football" },
  { id: 42, name: "Anvi Patel", age: 10, sport: "Chess" },
  { id: 43, name: "Rudra Kapoor", age: 11, sport: "Cricket" },
  { id: 44, name: "Vivaan Sharma", age: 6, sport: "Badminton" },
  { id: 45, name: "Aadhya Mehra", age: 12, sport: "Volleyball" },
  { id: 46, name: "Kiara Joshi", age: 5, sport: "Tennis" },
  { id: 47, name: "Aryan Patel", age: 9, sport: "Table Tennis" },
  { id: 48, name: "Aarohi Singh", age: 8, sport: "Basketball" },
  { id: 49, name: "Arjun Thakur", age: 13, sport: "Swimming" },
  { id: 50, name: "Anaya Choudhary", age: 7, sport: "Football" },
];

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [sortBy, setSortBy] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortDirection((prevDirection) =>
        prevDirection === "asc" ? "desc" : "asc"
      );
    } else {
      setSortBy(field);
      setSortDirection("asc");
    }
  };

  const sortedStudents = [...studentsData].sort((a, b) => {
    if (sortBy === "name") {
      return sortDirection === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else if (sortBy === "age") {
      return sortDirection === "asc" ? a.age - b.age : b.age - a.age;
    } else if (sortBy === "sport") {
      return sortDirection === "asc"
        ? a.sport.localeCompare(b.sport)
        : b.sport.localeCompare(a.sport);
    }
    return 0;
  });

  const filteredStudents = sortedStudents.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <h2>Student List</h2>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded p-2 mx-2"
        />
        <div className="flex items-center">
          <label className="block text-sm font-medium text-gray-700">
            Sort by:
          </label>
          <select
            className="p-2 border border-gray-300 rounded"
            value={sortBy}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="age">Age</option>
            <option value="sport">Sport</option>
          </select>
        </div>
      </div>
      <table className="border-collapse border border-gray-400 w-full mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-2">ID</th>
            <th className="border border-gray-400 p-2">Name</th>
            <th className="border border-gray-400 p-2">Age</th>
            <th className="border border-gray-400 p-2">Sport</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td className="border border-gray-400 p-2">{student.id}</td>
              <td className="border border-gray-400 p-2">{student.name}</td>
              <td className="border border-gray-400 p-2">{student.age}</td>
              <td className="border border-gray-400 p-2">{student.sport}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
