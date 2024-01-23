"use client";
import React, { useState } from "react";

const Page = () => {
  const [newEnquiry, setNewEnquiry] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEnquiry((prevEnquiry) => ({
      ...prevEnquiry,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Enquiry Data:", newEnquiry);
  };

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="text-4xl mb-8">New Enquiry</div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label className="mb-2 text-xl">Name:</label>
        <input
          type="text"
          name="name"
          value={newEnquiry.name}
          onChange={handleInputChange}
          className="border border-gray-300 rounded p-2 mb-4"
        />

        <label className="mb-2 text-xl">Email:</label>
        <input
          type="email"
          name="email"
          value={newEnquiry.email}
          onChange={handleInputChange}
          className="border border-gray-300 rounded p-2 mb-4"
        />

        <label className="mb-2 text-xl">Subject:</label>
        <input
          type="text"
          name="subject"
          value={newEnquiry.subject}
          onChange={handleInputChange}
          className="border border-gray-300 rounded p-2 mb-4"
        />

        <label className="mb-2 text-xl">Message:</label>
        <textarea
          name="message"
          value={newEnquiry.message}
          onChange={handleInputChange}
          className="border border-gray-300 rounded p-2 mb-4"
        ></textarea>

        <button
          type="submit"
          className="bg-gray-600 text-white px-4 py-2 rounded"
        >
          Submit Enquiry
        </button>
      </form>
    </div>
  );
};

export default Page;
