import {
  FaChartBar,
  FaGraduationCap,
  FaUsers,
  FaMoneyBillAlt,
  FaSearch,
  FaUsersCog,
  FaCalendarAlt,
} from "react-icons/fa";

const Menu = () => {
  return (
    <div className=" min-h-screen text-white p-6">
      <div className="mb-4 text-left font-bold text-sm">Main Menu</div>
      <div className="flex items-center mb-4">
        <FaChartBar className="mr-2" /> {/* Chart icon */}
        <a href="/dashboard" className="py-1 text-sm">
          Dashboard
        </a>
      </div>
      <div className="flex items-center mb-12">
        <FaGraduationCap className="mr-2" /> {/* Graduation cap icon */}
        <a href="/management" className="py-1 text-sm">
          Academy Management
        </a>
      </div>
      <div className="mb-4 text-left font-bold text-sm">More</div>
      <div className="flex items-center mb-4">
        <input
          type="text"
          className="w-full border-b-2 border-gray-400 px-2 py-1 focus:outline-none focus:border-gray-500 rounded-full text-gray-900 text-sm"
          placeholder="Enter student name"
        />
      </div>
      <div className="flex items-center mb-4">
        <FaUsers className="mr-2" /> {/* Users icon */}
        <a href="#" className="py-1 text-sm">
          Students
        </a>
      </div>
      <div className="flex items-center mb-4">
        <FaMoneyBillAlt className="mr-2" /> {/* Money bill icon */}
        <a href="#" className="py-1 text-sm">
          Fee Payments
        </a>
      </div>
      <div className="flex items-center mb-4">
        <FaSearch className="mr-2" /> {/* Search icon */}
        <a href="#" className="py-1 text-sm">
          Enquiries
        </a>
      </div>
      <div className="flex items-center mb-4">
        <FaUsersCog className="mr-2" /> {/* Users cog icon */}
        <a href="#" className="py-1 text-sm">
          Coaches
        </a>
      </div>
      <div className="flex items-center mb-4">
        <FaCalendarAlt className="mr-2" /> {/* Calendar icon */}
        <a href="#" className="py-1 text-sm">
          Schedule
        </a>
      </div>
    </div>
  );
};

export default Menu;
