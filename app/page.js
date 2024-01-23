import Image from "next/image";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Board from "./components/board/Board";

export default function Home() {
  return (
    <main className="">
      {/* <div className="min-h-screen mx-0 px-0">
        <Navbar />
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 lg:w-1/6 p-4 bg-gray-600 text-white">
            <Menu />
          </div>
          <div className="flex-1 p-4 py-0">
            <Board />
          </div>
        </div>
      </div> */}

      <Board />
    </main>
  );
}
