import {
  FaChartBar,
  FaGraduationCap,
  FaUsers,
  FaMoneyBillAlt,
  FaSearch,
  FaUsersCog,
  FaCalendarAlt,
} from "react-icons/fa";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="min-h-screen text-white p-6">
      <div className="mb-4 text-left font-bold text-sm">Main Menu</div>
      <div className="flex items-center mb-4">
        <FaChartBar className="mr-2" /> {/* Chart icon */}
        <Link href="/dashboard" className="py-1 text-sm">
          Dashboard
        </Link>
      </div>
      <div className="flex items-center mb-12">
        <FaGraduationCap className="mr-2" /> {/* Graduation cap icon */}
        <Link href="/management" className="py-1 text-sm">
          Academy Management
        </Link>
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
        <Link href="/students" className="py-1 text-sm">
          Students
        </Link>
      </div>
      <div className="flex items-center mb-4">
        <FaMoneyBillAlt className="mr-2" /> {/* Money bill icon */}
        <Link href="feepayments" className="py-1 text-sm">
          Fee Payments
        </Link>
      </div>
      <div className="flex items-center mb-4">
        <FaSearch className="mr-2" /> {/* Search icon */}
        <Link href="/enquiries" className="py-1 text-sm">
          Enquiries
        </Link>
      </div>
      <div className="flex items-center mb-4">
        <FaUsersCog className="mr-2" /> {/* Users cog icon */}
        <Link href="/coaches" className="py-1 text-sm">
          Coaches
        </Link>
      </div>
      <div className="flex items-center mb-4">
        <FaCalendarAlt className="mr-2" /> {/* Calendar icon */}
        <Link href="/schedule" className="py-1 text-sm">
          Schedule
        </Link>
      </div>
    </div>
  );
};

export default Menu;
