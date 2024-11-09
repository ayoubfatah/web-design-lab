import React from "react";
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

export default function SideBar({
  showSidebar,
  sideBarShowing,
}: {
  showSidebar: boolean;
  sideBarShowing: number;
}) {
  return (
    <div>
      {showSidebar && (
        <div className="border-r-[1px] h-full w-full">
          <ul>
            {sideBarShowing === 1 && (
              <div
                className={`${SidebarAnimation}  flex flex-col pt-4    gap-4 justify-center   w-full`}
              >
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex px-7 gap-2  text-black p-2 transition-colors"
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
                  <div key={group.group} className={`${SidebarAnimation} mb-6`}>
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
                className={`${SidebarAnimation}  flex flex-col pt-4     bg-white h-full gap-4 justify-center items-center`}
              >
                {navItems3.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-black rounded-md p-2 transition-colors"
                  >
                    <item.icon className="w-5 h-5 " />
                  </li>
                ))}
              </div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
