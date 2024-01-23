const Div2 = () => {
  return (
    <div className="bg-white p-4">
      <div className="mb-2 text-sm text-gray-400">Quick Actions</div>
      <div className="flex justify-between">
        <button className="bg-gray-600 text-white px-4 py-2 mr-2 rounded text-sm">
          + Add new student
        </button>
        <button className="bg-gray-600 text-white px-4 py-2 mr-2 rounded text-sm">
          Collect fees
        </button>
        <button className="bg-gray-600 text-white px-4 py-2 rounded text-sm">
          + Add new enquiry
        </button>
      </div>
    </div>
  );
};

export default Div2;
