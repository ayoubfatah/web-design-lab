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
import { cn } from "@/lib/utils";

const SidebarAnimation =
  "motion-translate-x-in-[-27%] motion-translate-y-in-[0%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/translate";

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

const navItems2 = [
  {
    group: "Main",
    items: [
      { icon: Home, label: "Explore" },
      { icon: Rss, label: "Feed" },
      { icon: Bell, label: "Notifications" },
    ],
  },
  {
    group: "Social",
    items: [
      { icon: Users, label: "Members" },
      { icon: User, label: "My profile" },
      { icon: MessageSquare, label: "Discussions" },
    ],
  },
  {
    group: "Activities",
    items: [
      { icon: Calendar, label: "Events" },
      { icon: UsersRound, label: "Groups" },
      { icon: Star, label: "Wishlist" },
    ],
  },
  {
    group: "Support",
    items: [
      { icon: HelpCircle, label: "Help center" },
      { icon: Boxes, label: "Resources" },
      { icon: Map, label: "Roadmap" },
      { icon: ClipboardList, label: "Changelog" },
      { icon: Briefcase, label: "Job board" },
    ],
  },
];

const navItems3 = [
  { icon: Home },
  { icon: Rss },
  { icon: Bell },
  { icon: Users },
  { icon: User },
  { icon: MessageSquare },
  { icon: Calendar },
  { icon: UsersRound },
  { icon: Star },
  { icon: HelpCircle },
  { icon: Boxes },
  { icon: Map },
  { icon: ClipboardList },
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
  const [sideBarShowing, setSideBarShowing] = useState<number>(1);

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

        <div
          className={cn(
            "grid bg-white h-full border overflow-hidden transition-all duration-150 ease-in-out",
            {
              "grid-cols-[230px,1fr]": showSidebar && sideBarShowing !== 3,
              "grid-cols-[60px,1fr]": showSidebar && sideBarShowing === 3,
              "grid-cols-[0px,1fr]": !showSidebar,
            }
          )}
        >
          <div>
            {showSidebar && (
              <div className="border-r-[1px] h-full">
                <ul>
                  {sideBarShowing === 1 && (
                    <div
                      className={`${SidebarAnimation} px-12 flex flex-col pt-4  bg-white items-start gap-4 justify`}
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
                    </div>
                  )}
                  {sideBarShowing === 2 && (
                    <div className={` px-3 py-5 `}>
                      {navItems2.map((group, groupIndex) => (
                        <div
                          key={group.group}
                          className={`${SidebarAnimation} mb-6`}
                        >
                          <h2 className="px-4 mb-2 text-xs font-semibold text-purple-600 dark:text-purple-300 uppercase tracking-wider">
                            {group.group}
                          </h2>
                          <div className="space-y-1">
                            {group.items.map((item, itemIndex) => (
                              <a
                                key={item.label}
                                href="#"
                                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-lg transition-all duration-200 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 hover:text-purple-700 dark:hover:text-purple-300 group"
                              >
                                <item.icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                                <span>{item.label}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {sideBarShowing === 3 && (
                    <div
                      className={`${SidebarAnimation}  flex flex-col pt-4    bg-white h-full gap-4 justify-center items-center`}
                    >
                      {navItems3.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-black rounded-md p-2 transition-colors"
                        >
                          <item.icon className="w-5 h-5" />
                        </li>
                      ))}
                    </div>
                  )}
                </ul>
              </div>
            )}
          </div>

          <ColorChangeElement initialColor="white">
            <div className=" text-black flex-grow ">
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">
                  Dummy Content Section
                </h2>
                <p>
                  This section is intentionally left blank for future content.
                </p>
              </div>
            </div>
          </ColorChangeElement>
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
            <RoundedCheckbox
              checked={sideBarShowing === 1}
              onChange={() => {
                setSideBarShowing(1);
              }}
              label="v1"
            />
            <RoundedCheckbox
              checked={sideBarShowing === 2}
              onChange={() => {
                setSideBarShowing(2);
              }}
              label="v2"
            />
            <RoundedCheckbox
              checked={sideBarShowing === 3}
              onChange={() => {
                setSideBarShowing(3);
              }}
              label="v3"
            />
          </div>
        </ColorChangeElement>
      </ColorChangeElement>
    </main>
  );
}
