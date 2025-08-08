export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export type ExperienceItem = {
  id: number;
  period: string;
  company: string;
  position: string;
  description: string;
  image: string;
};

export const workExperience: ExperienceItem[] = [
  // {
  //   id: 1,
  //   period: "Time: No Data",
  //   company: "Company: No Data",
  //   position: "Position: No Data",
  //   description: "Description: No Data",
  //   image: "/nodata.png",
  // },
];

export const studiesData = [
  {
    id: 1,
    period: "Jun 2022 - Present",
    company: "Naresuan University",
    position: "Bachelor in Computer Science",
    description: "",
    image: "/Naresuan_University_Logo.png",
  },
  {
    id: 2,
    period: "May 2016 - Mar 2022",
    company: "Sawananan Wittaya School",
    position: "General Education & Arts-Mathematics program",
    description: "",
    image: "/Sawananan_Wittaya_School_Logo.png",
  },
  {
    id: 3,
    period: "May 2010 - Mar 2016",
    company: "Sawangkhok Prachasan School",
    position: "General Education",
    description: "",
    image: "/Sawangkhok_Prachasan_School_Logo.png",
  },
];

export const techStack = [
  { name: "Javascript", icon: "/javascript.svg" },
  { name: "Typescript", icon: "/typescript-new.svg" },
  { name: "React", icon: "/react.svg" },
  { name: "Next.JS", icon: "nextdotjs.svg" },
  { name: "Expo", icon: "/expo.svg" },
  { name: "Node.JS", icon: "/nodedotjs.svg" },
  { name: "Express.JS", icon: "/expressdotjs.svg" },
  { name: "Postgresql", icon: "/postgresql.svg" },
  { name: "Drizzle ORM", icon: "/drizzle.png" },
  { name: "Tailwind CSS", icon: "/tailwindcss.svg" },
  { name: "Shadcn", icon: "/Shadcn.png" },
  { name: "Clerk", icon: "/clerk.svg" },
  { name: "Better Auth", icon: "/better-auth.png" },
  { name: "Vscode", icon: "/vscode.svg" },
  { name: "Git", icon: "/git.svg" },
  { name: "GitHub", icon: "/github.svg" },
  { name: "Postman", icon: "/postman.svg" },
];

export const projects = [
  {
    id: 1,
    title: "Tanaphat's Portfolio",
    des: "This is Tanaphat's personal portfolio, showcasing various experiences, skills, and projects.",
    img: "/portfolio.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/ace.png"],
    link: "https://github.com/ShadowsDuck/nextjs-portfolio",
  },
  {
    id: 2,
    title: "Wi-Attend",
    des: "A modern attendance tracking system. Robust data management for efficient record-keeping.",
    img: "/wi-attend.png",
    iconLists: ["/re.svg", "/expo.png", "/tail.svg", "/js.png"],
    link: "https://github.com/ShadowsDuck/react-native-WiAttend",
  },
];
