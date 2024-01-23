"use client";
import React, { useState } from "react";

const Page = () => {
  const [newStudent, setNewStudent] = useState({
    name: "",
    age: "",
    sport: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("New Student Data:", newStudent);
  };

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="text-4xl mb-8">New Student</div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label className="mb-2 text-xl">Name:</label>
        <input
          type="text"
          name="name"
          value={newStudent.name}
          onChange={handleInputChange}
          className="border border-gray-300 rounded p-2 mb-4"
        />

        <label className="mb-2 text-xl">Age:</label>
        <input
          type="text"
          name="age"
          value={newStudent.age}
          onChange={handleInputChange}
          className="border border-gray-300 rounded p-2 mb-4"
        />

        <label className="mb-2 text-xl">Sport:</label>
        <input
          type="text"
          name="sport"
          value={newStudent.sport}
          onChange={handleInputChange}
          className="border border-gray-300 rounded p-2 mb-4"
        />

        <button
          type="submit"
          className="bg-gray-600 text-white px-4 py-2 rounded"
        >
          Add Student
        </button>
      </form>
    </div>
  );
};

export default Page;
