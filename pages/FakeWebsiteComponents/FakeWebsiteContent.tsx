import { useEffect, useState, useCallback } from "react";
import { Navbar, Navbar2 } from "./navStuff/NavBars";
import { m, motion } from "framer-motion";
import NavSettings from "./navStuff/navSettings";
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
    image: "https://blog.theodo.com/_astro/ts_logo.BstCNrTU_1Dbxpr.webp",
    tags: ["TypeScript", "Web Development"],
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
      "https://images.squarespace-cdn.com/content/v1/638f10c47f505a72c6c86073/742d280c-683c-41b0-ac08-c70ee193dbe9/reactJS.jpg",
    tags: ["React", "Optimization"],
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
      "https://www.supplychaininfo.eu/wp-content/uploads/2019/07/shutterstock_611605280-compressor-1.jpg",
    tags: ["AWS", "Cloud Computing"],
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
      "https://www.supplychaininfo.eu/wp-content/uploads/2019/07/shutterstock_611605280-compressor-1.jpg",
    tags: ["Python", "ML", "Data Science"],
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
      "https://www.supplychaininfo.eu/wp-content/uploads/2019/07/shutterstock_611605280-compressor-1.jpg",
    tags: ["CI/CD", "Docker", "Kubernetes"],
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
      "https://www.supplychaininfo.eu/wp-content/uploads/2019/07/shutterstock_611605280-compressor-1.jpg",
    tags: ["JavaScript", "Node.js", "React"],
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
      "https://www.supplychaininfo.eu/wp-content/uploads/2019/07/shutterstock_611605280-compressor-1.jpg",
    tags: ["Python", "ML", "Data Science"],
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
      "https://www.supplychaininfo.eu/wp-content/uploads/2019/07/shutterstock_611605280-compressor-1.jpg",
    tags: ["CI/CD", "Docker", "Kubernetes"],
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
      "https://www.supplychaininfo.eu/wp-content/uploads/2019/07/shutterstock_611605280-compressor-1.jpg",
    tags: ["JavaScript", "Node.js", "React"],
  },
];

// Components

export default function FakeWebsiteContent() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [nav2v, setNav2v] = useState<number>(1);
  const [nav1v, setNav1v] = useState<number>(1);
  const [navBarSHowing, setNavBarSHowing] = useState<number>(1);
  const [sideBarShowing, setSideBarShowing] = useState<number>(1);
  const [hideCardContentImage, setHideCardContentImage] = useState(true);
  const [hideInstructorName, setHideInstructorName] = useState(true);

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
              "border-b-[1px] px-4 relative  flex items-center",
              LAYOUT.NAV_HEIGHT
            )}
          >
            {navBarSHowing === 1 && <Navbar nav1v={nav1v} />}
            {navBarSHowing === 2 && <Navbar2 nav2v={nav2v} />}
          </nav>
        </ColorChangeElement>

        <DraggableColorPalette colors={colors} />

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
          <ColorChangeElement initialColor="white">
            <div className="flex-grow h-screen w-full overflow-y-hidden">
              <div className="container mx-auto p-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                  <h1 className="text-2xl font-bold">Course Catalog</h1>
                  <SearchAndFilters />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2  overflow-hidden ">
                  {COURSES.map((course, i) => (
                    <SlideInElement key={course.id} delay={course.id * 0.1}>
                      <ColorChangeElement>
                        <CourseCard
                          i={i}
                          className={``}
                          hideCardContentImage={hideCardContentImage}
                          hideInstructorName={hideInstructorName}
                          key={course.id}
                          course={course}
                        />
                      </ColorChangeElement>
                    </SlideInElement>
                  ))}
                </div>
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
          <SideBarSettings
            showSidebar={showSidebar}
            sideBarShowing={sideBarShowing}
            handleSidebarToggle={handleSidebarToggle}
            setSideBarShowing={setSideBarShowing}
          />
          {/* cards */}

          <RoundedCheckbox
            label="card image"
            checked={hideCardContentImage}
            onChange={() => {
              setHideCardContentImage(!hideCardContentImage);
            }}
          />
          <RoundedCheckbox
            label="author"
            checked={hideInstructorName}
            onChange={() => {
              setHideInstructorName(!hideInstructorName);
            }}
          />
        </ColorChangeElement>
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
}> = ({ course, hideCardContentImage, hideInstructorName, className, i }) => (
  <Card
    className={cn(
      className,
      "grid grid-rows-[160px,270px,40px]  border-t-2 rounded-md transition-all duration-500 bg-inherit !text-inherit ",
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
          "w-full h-40 object-cover  rounded-t-md  border-b-[1px] translate-y-[-200px]  h-full transition-all duration-500",
          {
            " translate-y-0 ": !hideCardContentImage,
          }
        )}
      />
    </CardHeader>
    <CardContent className="flex-1 p-4 overflow-hidden">
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
    <CardFooter className="p-4 pt-0">
      <Button className="w-full ">Enroll Now</Button>
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

const SlideInElement = ({ children, delay = 0 }: any) => {
  return (
    <motion.div
      className={`z-[${delay * 10}]`}
      initial={{ x: "-10%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.3,
        delay: delay,
        ease: "easeIn",
      }}
    >
      {children}
    </motion.div>
  );
};
