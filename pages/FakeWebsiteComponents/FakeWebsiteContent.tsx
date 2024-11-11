import { useEffect, useState, useCallback } from "react";
import { Navbar, Navbar2 } from "./navStuff/NavBars";
import { m, motion } from "framer-motion";
import NavSettings, {
  NavBar1Options,
  NavBar2Options,
} from "./navStuff/navSettings";
import { ColorChangeElement, DraggableColorPalette } from "../DroppingColors";
import { RoundedCheckbox } from "./RoundedCheckbox";
import { cn } from "@/lib/utils";
import SideBar from "./sideBarComp/SideBar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import {
  BookOpen,
  ChevronDown,
  Clock,
  Code2,
  Filter,
  GraduationCap,
  Laptop,
  Search,
  Star,
  Terminal,
  Users,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SideBarSettings from "./sideBarComp/SideBarSettings";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import ToggleButton from "./toggleButton";
// Types
interface Course {
  id: number;
  title: string;
  instructor: string;
  category: string;
  level: string;
  duration: string;
  rating: number;
  students: number;
  image: string;
  tags: string[];
  price: number;
}

// Constants
const LAYOUT = {
  MAIN_WIDTH: "w-[1120px]",
  MAIN_HEIGHT: "h-[800px]",
  NAV_HEIGHT: "h-[66px]",
} as const;

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

const COURSES: Course[] = [
  {
    id: 1,
    title: "Advanced TypeScript Development",
    instructor: "Sarah Wilson",
    category: "Development",
    level: "Advanced",
    duration: "8 hours",
    rating: 4.8,
    students: 1234,
    image:
      "https://images.squarespace-cdn.com/content/v1/638f10c47f505a72c6c86073/742d280c-683c-41b0-ac08-c70ee193dbe9/reactJS.jpg",
    tags: ["TypeScript", "Web Development"],
    price: 49.99,
  },
  {
    id: 2,
    title: "React Performance and Optimization",
    instructor: "Mike Chen",
    category: "Frontend",
    level: "Intermediate",
    duration: "6 hours",
    rating: 4.6,
    students: 892,
    image:
      "https://clickysoft.com/wp-content/uploads/2023/05/React-Performance-Optimization-1536x864-1.jpg",
    tags: ["React", "Optimization"],
    price: 39.99,
  },
  {
    id: 3,
    title: "Cloud Architecture Fundamentals",
    instructor: "Alex Kumar",
    category: "Cloud",
    level: "Beginner",
    duration: "10 hours",
    rating: 4.9,
    students: 2156,
    image:
      "https://media.licdn.com/dms/image/v2/D4E12AQEaJ2VT2YswYQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1712701594392?e=2147483647&v=beta&t=3v_ZZDrLftut0Uvsb1iblohbuPMMDtZuQGiLYZ0fmmo",
    tags: ["AWS", "Cloud Computing"],
    price: 59.99,
  },
  {
    id: 4,
    title: "Machine Learning with Python",
    instructor: "Emma Davis",
    category: "AI/ML",
    level: "Intermediate",
    duration: "12 hours",
    rating: 4.7,
    students: 1567,
    image:
      "https://www.creativeitinstitute.com/images/course/course_1662804460.jpg",
    tags: ["Python", "ML", "Data Science"],
    price: 69.99,
  },
  {
    id: 5,
    title: "DevOps Best Practices 2024",
    instructor: "Tom Smith",
    category: "DevOps",
    level: "Advanced",
    duration: "9 hours",
    rating: 4.5,
    students: 945,
    image:
      "https://images.clickittech.com/2020/wp-content/uploads/2020/10/14174250/Devops-best-practices-banner-29-29.jpg",
    tags: ["CI/CD", "Docker", "Kubernetes"],
    price: 49.99,
  },
  {
    id: 6,
    title: "Full Stack Development 2024",
    instructor: "Lisa Johnson",
    category: "Development",
    level: "Intermediate",
    duration: "15 hours",
    rating: 4.8,
    students: 3421,
    image:
      "https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/course-thumbnail/845ca3af-58ee-4229-b05c-8c8a61844126.jpeg",
    tags: ["JavaScript", "Node.js", "React"],
    price: 79.99,
  },
  {
    id: 7,
    title: "Machine Learning with Python",
    instructor: "Emma Davis",
    category: "AI/ML",
    level: "Intermediate",
    duration: "12 hours",
    rating: 4.7,
    students: 1567,
    image:
      "https://images.squarespace-cdn.com/content/v1/638f10c47f505a72c6c86073/742d280c-683c-41b0-ac08-c70ee193dbe9/reactJS.jpg",
    tags: ["Python", "ML", "Data Science"],
    price: 69.99,
  },
  {
    id: 8,
    title: "DevOps Best Practices",
    instructor: "Tom Smith",
    category: "DevOps",
    level: "Advanced",
    duration: "9 hours",
    rating: 4.5,
    students: 945,
    image:
      "https://images.squarespace-cdn.com/content/v1/638f10c47f505a72c6c86073/742d280c-683c-41b0-ac08-c70ee193dbe9/reactJS.jpg",
    tags: ["CI/CD", "Docker", "Kubernetes"],
    price: 49.99,
  },
  {
    id: 9,
    title: "Full Stack Development",
    instructor: "Lisa Johnson",
    category: "Development",
    level: "Intermediate",
    duration: "15 hours",
    rating: 4.8,
    students: 3421,
    image:
      "https://images.squarespace-cdn.com/content/v1/638f10c47f505a72c6c86073/742d280c-683c-41b0-ac08-c70ee193dbe9/reactJS.jpg",
    tags: ["JavaScript", "Node.js", "React"],
    price: 79.99,
  },
];

const COURSES_LIST = [
  {
    id: 1,
    title: "Advanced TypeScript Development",
    instructor: "Sarah Wilson",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
    tags: ["TypeScript", "Web Development"],
    duration: "8 hours",
    level: "Advanced",
    students: 1234,
    rating: 4.8,
    price: 49.99,
  },
  {
    id: 2,
    title: "React Performance and Optimization",
    instructor: "Mike Chen",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
    tags: ["React", "Optimization"],
    duration: "6 hours",
    level: "Intermediate",
    students: 892,
    rating: 4.8,
    price: 39.99,
  },
  {
    id: 3,
    title: "Cloud Architecture Fundamentals",
    instructor: "Alex Kumar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
    tags: ["AWS", "Cloud Computing"],
    duration: "10 hours",
    level: "Beginner",
    students: 2156,
    rating: 4.9,
    price: 59.99,
  },
  {
    id: 4,
    title: "Machine Learning with Python",
    instructor: "Emma Davis",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
    tags: ["Python", "ML"],
    duration: "12 hours",
    level: "Intermediate",
    students: 1567,
    rating: 4.7,
    price: 69.99,
  },
  {
    id: 5,
    title: "DevOps Best Practices",
    instructor: "Tom Smith",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
    tags: ["CI/CD", "Docker"],
    duration: "9 hours",
    level: "Advanced",
    students: 945,
    rating: 4.5,
    price: 49.99,
  },
  {
    id: 6,
    title: "Full Stack Development",
    instructor: "Lisa Johnson",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
    tags: ["JavaScript", "Node.js"],
    duration: "15 hours",
    level: "Intermediate",
    students: 3421,
    rating: 4.8,
    price: 79.99,
  },
  {
    id: 7,
    title: "Machine Learning with Python - Advanced",
    instructor: "Emma Davis",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
    tags: ["Python", "ML"],
    duration: "12 hours",
    level: "Advanced",
    students: 1567,
    rating: 4.7,
    price: 69.99,
  },
  {
    id: 8,
    title: "DevOps Best Practices - Advanced",
    instructor: "Tom Smith",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
    tags: ["CI/CD", "Docker"],
    duration: "9 hours",
    level: "Advanced",
    students: 945,
    rating: 4.5,
    price: 49.99,
  },
  {
    id: 9,
    title: "Full Stack Development - Advanced",
    instructor: "Lisa Johnson",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
    tags: ["JavaScript", "Node.js"],
    duration: "15 hours",
    level: "Advanced",
    students: 3421,
    rating: 4.8,
    price: 79.99,
  },
  {
    id: 10,
    title: "Full Stack Development - Advanced",
    instructor: "Lisa Johnson",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
    tags: ["JavaScript", "Node.js"],
    duration: "15 hours",
    level: "Advanced",
    students: 3421,
    rating: 4.8,
    price: 79.99,
  },
  {
    id: 11,
    title: "Full Stack Development - Advanced",
    instructor: "Lisa Johnson",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
    tags: ["JavaScript", "Node.js"],
    duration: "15 hours",
    level: "Advanced",
    students: 3421,
    rating: 4.8,
    price: 79.99,
  },
  {
    id: 12,
    title: "Full Stack Development - Advanced",
    instructor: "Lisa Johnson",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
    tags: ["JavaScript", "Node.js"],
    duration: "15 hours",
    level: "Advanced",
    students: 3421,
    rating: 4.8,
    price: 79.99,
  },
];

// Components

export default function FakeWebsiteContent() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [navbarVersion2, setNavbarVersion2] = useState<number>(1);
  const [navbarVersion1, setNavbarVersion1] = useState<number>(1);
  const [navbarWithSearch, setNavbarWithSearch] = useState(false);

  //
  const [sideBarShowing, setSideBarShowing] = useState<number>(1);
  const [hideCardContentImage, setHideCardContentImage] = useState(false);
  const [hideInstructorName, setHideInstructorName] = useState(false);
  const [showContentAsCards, setShowContentAsCards] = useState(true);
  const [showPrice, setShowPrice] = useState(false);
  const [] = useState();
  const handleSidebarToggle = useCallback(() => {
    setShowSidebar((prev) => !prev);
  }, []);

  return (
    <main className="flex">
      <div
        className={cn(
          "relative z-30 flex flex-col",
          LAYOUT.MAIN_WIDTH,
          LAYOUT.MAIN_HEIGHT
        )}
      >
        <ColorChangeElement>
          <nav
            className={cn(
              "border-[1px] px-4 relative  flex items-center",
              LAYOUT.NAV_HEIGHT
            )}
          >
            {!navbarWithSearch && <Navbar navbarVersion1={navbarVersion1} />}
            {navbarWithSearch && <Navbar2 navbarVersion2={navbarVersion2} />}
          </nav>
        </ColorChangeElement>

        <DraggableColorPalette />

        <div
          className={cn(
            "grid bg-white h-full border overflow-hidden transition-all duration-150 ease-in-out",
            {
              "grid-cols-[200px,1fr]": showSidebar && sideBarShowing !== 3,
              "grid-cols-[60px,1fr]": showSidebar && sideBarShowing === 3,
              "grid-cols-[0px,1fr]": !showSidebar,
            }
          )}
        >
          <ColorChangeElement>
            <SideBar
              sideBarShowing={sideBarShowing}
              showSidebar={showSidebar}
            />
          </ColorChangeElement>
          <ColorChangeElement>
            <div className="border-l-[1px]  flex-grow h-screen w-full overflow-y-hidden">
              <div className="container mx-auto p-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                  <h1 className="text-2xl font-bold">Course Catalog</h1>
                  <SearchAndFilters />
                </div>
                {/* VERSION 1
                 */}
                {showContentAsCards ? (
                  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2  overflow-hidden ">
                    {COURSES.map((course, i) => (
                      <div
                        className="stairsAnimation"
                        key={course.id}
                        style={{
                          animationName: "revers_stair_effect",
                          animationDuration: "0.2s",
                          animationTimingFunction: "ease forwards",
                          animationDelay: `${(COURSES.length - i) * 0.05}s`,
                        }}
                      >
                        <ColorChangeElement>
                          <CourseCard
                            i={i}
                            showPrice={showPrice}
                            className={``}
                            hideCardContentImage={hideCardContentImage}
                            hideInstructorName={hideInstructorName}
                            key={course.id}
                            course={course}
                          />
                        </ColorChangeElement>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="container mx-auto py-4 transition-all duration-700">
                    <Table>
                      <TableHeader>
                        <TableRow className="stairsAnimation hover:bg-transparent !text-inherit">
                          <TableHead className="!text-inherit opacity-70 w-[400px]">
                            Course
                          </TableHead>
                          {!hideInstructorName && (
                            <TableHead className="!text-inherit opacity-70">
                              Instructor
                            </TableHead>
                          )}
                          <TableHead className="!text-inherit opacity-70">
                            Duration
                          </TableHead>
                          <TableHead className="!text-inherit opacity-70">
                            Level
                          </TableHead>
                          {showPrice && (
                            <TableHead className="!text-inherit opacity-70">
                              Price
                            </TableHead>
                          )}
                          <TableHead className="!text-inherit opacity-70 text-right">
                            Actions
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {COURSES_LIST.map((course, i) => (
                          <TableRow
                            style={{ animationDelay: `${(i + 1) * 0.07}s` }}
                            className={`stairsAnimation`}
                            key={course.id}
                          >
                            <TableCell>
                              <div className="flex items-center gap-4">
                                <div className="flex flex-col gap-1">
                                  <div className="font-medium">
                                    {course.title}
                                  </div>
                                  <div className="flex gap-2">
                                    {course.tags.map((tag) => (
                                      <Badge
                                        key={tag}
                                        variant="secondary"
                                        className="px-2 py-0.5 text-xs"
                                      >
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </TableCell>
                            {!hideInstructorName && (
                              <TableCell>{course.instructor}</TableCell>
                            )}
                            <TableCell>{course.duration}</TableCell>
                            <TableCell>{course.level}</TableCell>
                            {showPrice && (
                              <TableCell>${course.price}</TableCell>
                            )}
                            <TableCell className="text-right">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                              >
                                <ChevronDown className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
                :
              </div>
            </div>
          </ColorChangeElement>
        </div>
      </div>

      <ColorChangeElement
        initialColor="white"
        className="w-[500px]   pt-4 px-8 space-y-8 flex-1 -order-1 font-medium justify-center flex items-start"
      >
        <div className="mb-4">
          <h1 className="text-[30px] font-bold">Limitless Customization</h1>
          <p className="text-[18px] ">
            Unmatched flexibility for all your unique needs.
          </p>
        </div>
        {/*  */}
        <aside className="flex flex-col gap-8">
          <div className="flex  items-center gap-4 ">
            <ToggleButton
              initialState={!navbarWithSearch}
              onChange={() => {
                setNavbarWithSearch(!navbarWithSearch);
              }}
            />
            <div>
              <h1 className="font-semibold text-[20px]">Default Navbar</h1>
              <p className="text-[14px]">Customize top navigation style.</p>
              <div className="flex gap-2 items-center">
                <RoundedCheckbox
                  checked={navbarVersion1 === 1}
                  onChange={() => {
                    setNavbarVersion1(1);
                  }}
                  label="v1"
                />
                <RoundedCheckbox
                  checked={navbarVersion1 === 2}
                  onChange={() => {
                    setNavbarVersion1(2);
                  }}
                  label="v2"
                />
                <RoundedCheckbox
                  checked={navbarVersion1 === 3}
                  onChange={() => {
                    setNavbarVersion1(3);
                  }}
                  label="v3"
                />
              </div>
            </div>
          </div>

          {/* search */}
          <div className="flex  items-center gap-4  ">
            <ToggleButton
              initialState={navbarWithSearch}
              onChange={() => {
                setNavbarWithSearch(!navbarWithSearch);
              }}
            />
            <div>
              <h1 className="font-semibold text-[20px]">Navbar with Search</h1>
              <p className="text-[14px]">Enable search bar in navigation.</p>
              <div className="flex gap-2 items-center">
                <RoundedCheckbox
                  checked={navbarVersion2 === 2}
                  onChange={() => {
                    setNavbarVersion2(2);
                  }}
                  label="v1"
                />
                <RoundedCheckbox
                  checked={navbarVersion2 === 1}
                  onChange={() => {
                    setNavbarVersion2(1);
                  }}
                  label="v2"
                />
                <RoundedCheckbox
                  checked={navbarVersion2 === 3}
                  onChange={() => {
                    setNavbarVersion2(3);
                  }}
                  label="v3"
                />
              </div>
            </div>

            {/* <NavSettings
              setNavbarVersion1={setNavbarVersion1}
              setNavbarVersion2={setNavbarVersion2}
              navbarVersion1={navbarVersion1}
              navbarVersion2={navbarVersion2}
              setNavBarSHowing={setNavBarSHowing}
              navBarSHowing={navBarSHowing}
            /> */}
          </div>
          {/*  side bar */}
          <div className="flex  items-center gap-4  ">
            <ToggleButton
              initialState={showSidebar}
              onChange={() => setShowSidebar(!showSidebar)}
            />
            <div>
              <div>
                <h1 className="font-semibold text-[20px]">
                  Sidebar Customization
                </h1>
                <p className="text-[14px]">Choose sidebar style.</p>
              </div>

              <SideBarSettings
                showSidebar={showSidebar}
                sideBarShowing={sideBarShowing}
                handleSidebarToggle={handleSidebarToggle}
                setSideBarShowing={setSideBarShowing}
              />
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col  gap-8  ">
            {/* content  as cards or list */}
            <div className="flex text-[17px] items-center  gap-4">
              <div className=" items-center gap-4">
                <ToggleButton
                  initialState={showContentAsCards}
                  onChange={() => {
                    setShowContentAsCards(!showContentAsCards);
                  }}
                />
              </div>
              <div>
                <h1 className="font-semibold text-[19px]">Card or List </h1>
                <p className="text-[14px]">
                  Switch between card and list views.
                </p>
              </div>
            </div>
            {/* cards */}
            {/* turning to list or car */}
            <>
              {/* Image */}
              <div className="flex gap-4    items-center">
                <ToggleButton
                  initialState={!hideCardContentImage}
                  onChange={() => {
                    setHideCardContentImage(!hideCardContentImage);
                  }}
                />
                <div className="flex flex-col">
                  <h1 className="text-[19px] font-semibold">Card Images</h1>
                  <p className="text-[14px]"> Show or hide images on cards.</p>
                </div>
              </div>
              {/* Instructor */}
              <div className="flex gap-4 font-semibold   items-center">
                <ToggleButton
                  initialState={!hideInstructorName}
                  onChange={() => {
                    setHideInstructorName(!hideInstructorName);
                  }}
                />
                <div className="flex flex-col">
                  <h1 className="text-[19px] font-semibold">Instructor</h1>
                  <p className="text-[14px]">
                    {" "}
                    Display instructor information.
                  </p>
                </div>
              </div>
              {/* price */}
              <div className="flex gap-4 font-semibold  items-center">
                <ToggleButton
                  initialState={showPrice}
                  onChange={() => {
                    setShowPrice(!showPrice);
                  }}
                />
                <div className="flex flex-col">
                  <h1 className="text-[19px] font-semibold">Show Price</h1>
                  <p className="text-[14px]">Toggle visibility of prices.</p>
                </div>
              </div>
            </>
          </div>
        </aside>
      </ColorChangeElement>
    </main>
  );
}

const CourseCard: React.FC<{
  course: Course;
  hideCardContentImage: boolean;
  hideInstructorName: boolean;
  className: string;
  i: number;
  showPrice: boolean;
}> = ({
  course,
  hideCardContentImage,
  showPrice,
  hideInstructorName,
  className,
  i,
}) => (
  <Card
    className={cn(
      className,
      "grid grid-rows-[160px,270px,40px] rounded-none transition-all duration-500 bg-inherit !text-inherit ",
      {
        "grid-rows-[0px,270px,40px] ": hideCardContentImage,
        "grid-rows-[0px,240px,40px] ":
          hideInstructorName && hideCardContentImage,
        "grid-rows-[160px,240px,40px] ":
          hideInstructorName && !hideCardContentImage,
      }
    )}
  >
    <CardHeader className="p-0 overflow-hidden  ">
      <img
        src={course.image}
        alt={`${course.title} course thumbnail`}
        className={cn(
          "w-full h-40 object-cover  rounded-t-none   translate-y-[-200px]  h-full transition-all duration-500",
          {
            " translate-y-0 ": !hideCardContentImage,
          }
        )}
      />
    </CardHeader>
    <CardContent className="flex-1 p-4 overflow-hidden ">
      <h2 className="text-xl font-semibold mb-2">{course.title}</h2>

      <p
        className={cn(
          "text-sm text-muted-foreground  -translate-y-2 hidden opacity-0 scale-y-0 mb-4 transition-all duration-500",
          {
            "scale-y-100 -translate-y-0 block opacity-100 ":
              !hideInstructorName,
          }
        )}
      >
        by {course.instructor}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {course.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          {course.duration}
        </div>
        <div className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4" />
          {course.level}
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4" />
          {course.students.toLocaleString()} students
        </div>
        <div className="flex items-center gap-2">
          <Star fill="yellow" className="w-4 h-4 text-yellow-400" />
          {course.rating} ({course.students.toLocaleString()} reviews)
        </div>
      </div>
    </CardContent>
    <CardFooter className="px-2 pt-3 flex justify-between ">
      {showPrice ? (
        <>
          <p className=" px-3 motion-translate-x-in-[0%] motion-translate-y-in-[20%] motion-opacity-in-[0%] font-extrabold text-2xl">
            {course.price}$
          </p>
          <Button className=" px-3 motion-translate-x-in-[0%] motion-translate-y-in-[20%] motion-opacity-in-[0%] ">
            Enroll Now
          </Button>
        </>
      ) : (
        <Button className="motion-translate-x-in-[0%] motion-translate-y-in-[20%] motion-opacity-in-[0%] w-full">
          Enroll Now
        </Button>
      )}
    </CardFooter>
  </Card>
);

const SearchAndFilters: React.FC = () => (
  <div className="flex flex-wrap gap-2">
    <div className="relative  bg-inherit">
      <Search className="absolute  text-inherit left-2 top-1/2 transform -translate-y-1/2 " />
      <Input className="pl-8 text-inherit" />
    </div>
    <Select>
      <SelectTrigger className=" w-[180px]">
        <SelectValue className="" placeholder="Category" />
      </SelectTrigger>
    </Select>
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Level" />
      </SelectTrigger>
    </Select>
  </div>
);
