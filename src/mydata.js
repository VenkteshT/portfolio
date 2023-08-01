import {
  faLaptopCode,
  faCloudUploadAlt,
  faCode,
  faMobile,
  faEnvelope,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

import pJs from "./imgs/programming_languages/js.png";
import pCss from "./imgs/programming_languages/css.png";
import pJava from "./imgs/programming_languages/java.png";
import pHtml from "./imgs/programming_languages/html.png";
import pNode from "./imgs/programming_languages/node.png";
import pReact from "./imgs/programming_languages/react.png";
import pMongo from "./imgs/programming_languages/mongo.png";
import pExpress from "./imgs/programming_languages/express.png";
import pGithub from "./imgs/programming_languages/github.png";
import pTs from "./imgs/programming_languages/ts.png";

// projects
import amazon from "./imgs/amazon.png";
import netflix from "./imgs/netflix.png";
import ers from "./imgs/ers.png";
import ht from "./imgs/ht.png";

// certificates
import dsa from "./imgs/DSA.png";
import frontend from "./imgs/Frontend.png";
import backend from "./imgs/Backend.png";
import react from "./imgs/React.png";

const info = [
  { key: "Name", val: "Venktesh M T" },
  { key: "Age", val: new Date().getFullYear() - 2001 },
  { key: "Degree", val: "BCA" },
  { key: "Email", val: "venkteshmt10@gmail.com" },
  { key: "Phone", val: 8073397359 },
  { key: "city", val: "Ranibennur, Karnataka" },
];

const education = [
  {
    from: 2018,
    to: 2021,
    education: "Bachelor of computer applications",
    info: "Pursued my BCA degree from Karanatak University Dharwad in the year 2021",
  },
  {
    from: 2015,
    to: 2018,
    education: "PUC",
    info: "Completed my 2nd puc education in year 2018 from HSPU College Ranibennur",
  },
  {
    from: 2014,
    to: 2015,
    education: "SSLC",
    info: " Completed my SSLC education in the year 2015 from Lions High School Ranibennur.",
  },
];

const skills = [
  {
    name: "Javascript",
    img: pJs,
  },
  {
    name: "HTML",
    img: pHtml,
  },
  { name: "CSS", img: pCss },
  {
    name: "React",
    img: pReact,
  },
  {
    name: "Node.js",
    img: pNode,
  },
  {
    name: "Express.js",
    img: pExpress,
  },
  {
    name: "MongoDB",
    img: pMongo,
  },
  {
    name: "Github",
    img: pGithub,
  },
  {
    name: "Java",
    img: pJava,
  },
  {
    name: "... soon",
    img: pTs,
  },
];

const services = [
  {
    png: faLaptopCode,
    title: "Web Development",
    info: `web development service tailored to your needs.`,
  },
  {
    png: faCode,
    title: "Frontend Development",
    info: `skillfull frontend development for captivating user experiences.`,
  },
  {
    png: faCloudUploadAlt,
    title: "Backend Development",
    info: `backend development to power your web applications.`,
  },
];

const projects = [
  {
    title: "Amazon-clone",
    type: "Frontend",
    img: amazon,
    link: "https://mellifluous-brioche-84f36f.netlify.app/",
  },
  {
    title: "netflix-clone",
    type: "Frontend",
    img: netflix,
    link: "https://netflix-clone-by-venktesh.netlify.app/",
  },
  {
    title: "Habit-tracker",
    type: "Backend",
    img: ers,
    link: "https://github.com/VenkteshT/Habit_tracker",
  },
  {
    title: "Employee-Review-System",
    type: "Backend",
    img: ht,
    link: "https://github.com/VenkteshT/employe-review-system",
  },
];

const contactInfo = [
  {
    key: "Call Me On",
    val: "8073397359",
    icon: faMobile,
  },
  {
    key: "Email",
    val: "venkteshmt10@gmail.com",
    icon: faEnvelope,
  },
  {
    key: "Linked-in",
    val: "Venktesh T",
    link: "https://www.linkedin.com/in/venktesh-t-b34b78218",
    icon: faHome,
  },
];

const myCirtificates = [
  {
    name: "Frontend",
    img: frontend,
    link: "https://certificate.codingninjas.com/view/1bb8a2c3666c32ab",
  },
  {
    name: "Backend",
    img: backend,
    link: "https://certificate.codingninjas.com/view/119364da52795ef4",
  },
  {
    name: "React",
    img: react,
    link: "https://certificate.codingninjas.com/view/2c10e80fc38b2a2e",
  },
  {
    name: "DSA",
    img: dsa,
    link: "https://certificate.codingninjas.com/view/aee2f13693f93ba2",
  },
];

export {
  skills,
  info,
  education,
  services,
  projects,
  contactInfo,
  myCirtificates,
};
