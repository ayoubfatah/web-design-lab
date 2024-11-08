import { useEffect, useState } from "react";
import { Navbar, Navbar2 } from "./navStuff/NavBars";
import { motion } from "framer-motion";
import NavSettings from "./navStuff/navSettings";
import { ColorChangeElement, DraggableColorPalette } from "../DroppingColors";
import {
  Home,
  Rss,
  Bell,
  Users,
  User,
  MessageSquare,
  FileText,
  Calendar,
  UsersRound,
  Star,
  HelpCircle,
  Boxes,
  Map,
  ClipboardList,
  Briefcase,
} from "lucide-react";
import { RoundedCheckbox } from "./RoundedCheckbox";

const navItems = [
  { icon: Home, label: "Explore" },
  { icon: Rss, label: "Feed" },
  { icon: Bell, label: "Notifications" },
  { icon: Users, label: "Members" },
  { icon: User, label: "My profile" },
  { icon: MessageSquare, label: "Discussions" },
  { icon: Calendar, label: "Events" },
  { icon: UsersRound, label: "Groups" },
  { icon: Star, label: "Wishlist" },
  { icon: HelpCircle, label: "Help center" },
  { icon: Boxes, label: "Resources" },
  { icon: Map, label: "Roadmap" },
  { icon: ClipboardList, label: "Changelog" },
];

const colors = [
  { bg: "#FF0000", name: "red" },
  { bg: "#00FF00", name: "green" },
  { bg: "#ffffff", name: "white" },
  { bg: "#2f2e2a", name: "slate" },
  { bg: "#544f52", name: "slateLow" },
  { bg: "#800080", name: "purple" },
  { bg: "#FFA500", name: "orange" },
  { bg: "#008080", name: "teal" },
  { bg: "#4B0082", name: "indigo" },
  { bg: "#32CD32", name: "lime" },
  { bg: "#000000", name: "black" },
];

export default function FakeWebsiteContent() {
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const showSidebarTimeout = setTimeout(() => {
      setShowSidebar(true);
    }, 0);

    return () => {
      setShowSidebar(false);
      clearTimeout(showSidebarTimeout);
    };
  }, []);

  const [nav2v, setNav2v] = useState<number>(1);
  const [nav1v, setNav1v] = useState<number>(1);
  const [navBarSHowing, setNavBarSHowing] = useState<number>(1);

  const handleSidebarToggle = () => {
    setShowSidebar((prevState) => !prevState);
  };

  return (
    <main className="flex">
      <div className="w-[1120px] relative z-30 flex flex-col h-[800px]">
        <nav className="border-b-[1px] px-4 relative bg-white text-black h-[66px] overflow-hidden pointer-events-none flex items-center">
          {navBarSHowing === 1 && <Navbar nav1v={nav1v} />}
          {navBarSHowing === 2 && <Navbar2 nav2v={nav2v} />}
        </nav>

        <DraggableColorPalette colors={colors} />

        <div className="flex h-full bg-white overflow-hidden">
          {showSidebar ? (
            <motion.ul
              className="px-12 flex flex-col pt-4 border-r-[1px]  bg-white items-start gap-4 justify"
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              exit={{ x: -200 }}
              transition={{ ease: "anticipate" }}
            >
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-black rounded-md p-2 transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </li>
              ))}
            </motion.ul>
          ) : (
            <motion.div
              initial={{ x: 200, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 200, opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.2 }}
              className="bg-white text-black flex-grow "
            >
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">
                  Dummy Content Section
                </h2>
                <p>
                  This section is intentionally left blank for future content.
                </p>
              </div>
            </motion.div>
          )}
          {showSidebar && (
            <motion.div
              initial={{ x: -200, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 200, opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.2 }}
              className="bg-white text-black flex-grow "
            >
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">
                  Dummy Content Section
                </h2>
                <p>
                  This section is intentionally left blank for future content.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <ColorChangeElement
        initialColor="purple"
        className="w-[400px] flex-1 -order-1 flex items-center"
      >
        <ColorChangeElement initialColor="white" className="">
          <div className="flex">
            <NavSettings
              setNav1v={setNav1v}
              setNav2v={setNav2v}
              nav1v={nav1v}
              nav2v={nav2v}
              setNavBarSHowing={setNavBarSHowing}
              navBarSHowing={navBarSHowing}
            />
          </div>
          <div>
            <RoundedCheckbox
              checked={showSidebar}
              onChange={handleSidebarToggle}
              label="Sidebar"
            />
          </div>
        </ColorChangeElement>
      </ColorChangeElement>
    </main>
  );
}
