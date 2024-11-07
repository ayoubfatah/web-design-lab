import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { RoundedCheckbox } from "./RoundedCheckbox";
import { Navbar, Navbar2 } from "./NavBars";

export default function FakeWebsiteContent() {
  const [showTheSection, setShowTheSection] = useState(false);

  useEffect(() => {
    const showSectionTimeOut = setTimeout(() => {
      setShowTheSection(true);
    }, 0);
    return () => {
      setShowTheSection(false);

      clearTimeout(showSectionTimeOut);
    };
  }, []);

  const [searchInput, setSearchInput] = useState<1 | 2>(1);
  const [nav1v, setNav1v] = useState<1 | 2>(1);
  const [navBarSHowing, setNavBarSHowing] = useState(1);

  return (
    showTheSection && (
      <main className="flex">
        <div className="w-[1120px] relative   z-30 flex  flex-col  h-[800px] ">
          <nav className="relative  text-black bg-white h-[66px] overflow-hidden pointer-events-none flex items-center">
            {navBarSHowing === 2 && <Navbar nav1v={nav1v} />}{" "}
            {navBarSHowing === 1 && <Navbar2 searchInput={searchInput} />}
          </nav>
          <div className="flex h-full">
            <div className="bg-yellow-400 w-[250px] ">
              <ul className="bg-red-400 flex flex-col items-center gap-4 justify-between">
                <li className="">Explore</li>
                <li className="">Explore</li>
                <li className="">Explore</li>
                <li className="">Explore</li>
                <li className="">Explore</li>
                <li className="">Explore</li>
                <li className="">Explore</li>
              </ul>
            </div>
            <div className="bg-blue-400 flex-grow"></div>
          </div>
        </div>
        <div className="bg-purple-600  w-[400px]  flex-1 -order-1 flex  items-center ">
          <div className="flex gap-1 mr-4">
            <RoundedCheckbox
              onChange={() => setNavBarSHowing(1)}
              checked={navBarSHowing === 1}
              label="Nav 1"
            />
            <RoundedCheckbox
              onChange={() => setNavBarSHowing(2)}
              checked={navBarSHowing === 2}
              label="Nav 2"
            />
          </div>
          {navBarSHowing === 1 && (
            <NavBar1Options
              searchInput={searchInput}
              setSearchInput={setSearchInput}
            />
          )} 
          {navBarSHowing === 2 && (
            <NavBar2Options setNav1v={setNav1v} nav1v={nav1v} />
          )}
        </div>
      </main>
    )
  );
}

function NavBar1Options({
  setSearchInput,
  searchInput,
}: {
  setSearchInput: Dispatch<SetStateAction<1 | 2>>;
  searchInput: 1 | 2;
}) {
  return (
    <div>
      <div className="flex gap-1 items-center">
        <RoundedCheckbox
          checked={searchInput === 1}
          onChange={() => {
            setSearchInput(1);
          }}
          label="v1"
        />
        <RoundedCheckbox
          checked={searchInput === 2}
          onChange={() => {
            setSearchInput(2);
          }}
          label="v2"
        />
      </div>
    </div>
  );
}
function NavBar2Options({
  setNav1v,
  nav1v,
}: {
  setNav1v: Dispatch<SetStateAction<1 | 2>>;
  nav1v: 1 | 2;
}) {
  return (
    <div>
      <div className="flex gap-1 items-center">
        <RoundedCheckbox
          checked={nav1v === 1}
          onChange={() => {
            setNav1v(1);
          }}
          label="v1"
        />
        <RoundedCheckbox
          checked={nav1v === 2}
          onChange={() => {
            setNav1v(2);
          }}
          label="v2"
        />
      </div>
    </div>
  );
}

// function ToggleButton({
//   show,
//   handleFunction,
// }: {
//   show: boolean;
//   handleFunction: () => void;
// }) {
//   return (
//     <label className="inline-flex items-center cursor-pointer">
//       <input
//         type="checkbox"
//         className="sr-only peer"
//         checked={show}
//         onChange={handleFunction}
//       />

//       <div
//         className={`relative w-11 h-6 rounded-full transition-colors
//           ${show ? "bg-yellow-400 " : "bg-gray-200 "}`}
//       >
//         <div
//           className={`absolute top-0.5 start-[2px] h-5 w-5 rounded-full bg-white border
//             ${show ? "translate-x-full border-white" : "border-gray-300"}
//              transition-transform
//           `}
//         ></div>
//       </div>
//       {/* <div className="ml-2 flex  flex-col">
//         <div>Search</div>
//         <p className="text-[10px]">Multiple ways to configure your search</p>
//       </div> */}
//     </label>
//   );
// }

// const Avatar2 = () => {
//   return (
//     <div className="relative">
//       <img
//         className="w-10 h-10 rounded-full"
//         src="https://i.pravatar.cc/300"
//         alt="avatar"
//       />
//       <span className="top-0 left-7 absolute  w-3.5 h-3.5  border-2 border-white dark:border-gray-800 rounded-full"></span>
//     </div>
//   );
// };
