import {
  faLaptopCode,
  faCloudUploadAlt,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

import amazon from "./imgs/amazon.png";
import netflix from "./imgs/netflix.png";
import ers from "./imgs/ers.png";
import ht from "./imgs/ht.png";

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
    img: "https://e7.pngegg.com/pngimages/725/775/png-clipart-javascript-html-logo-blog-css3-javanese-miscellaneous-angle-thumbnail.png",
  },
  {
    name: "HTML",
    img: "https://w7.pngwing.com/pngs/840/443/png-transparent-html-5-logo-web-development-html-css3-canvas-element-web-design-w3c-html5-logo-miscellaneous-text-orange-thumbnail.png",
  },
  { name: "CSS", img: "https://cdn-icons-png.flaticon.com/512/919/919826.png" },
  {
    name: "React",
    img: "https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png",
  },
  {
    name: "Node.js",
    img: "https://w7.pngwing.com/pngs/452/24/png-transparent-js-logo-node-logos-and-brands-icon-thumbnail.png",
  },
  {
    name: "Express.js",
    img: "https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png",
  },
  {
    name: "MongoDB",
    img: "https://www.pngall.com/wp-content/uploads/13/Mongodb-Transparent.png",
  },
  {
    name: "Github",
    img: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },
  {
    name: "Java",
    img: "https://w7.pngwing.com/pngs/578/816/png-transparent-java-class-file-java-platform-standard-edition-java-development-kit-java-runtime-environment-coffee-jar-text-class-orange-thumbnail.png",
  },
];

const services = [
  {
    png: faLaptopCode,
    title: "Web Development",
    info: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ab sunt sint eius possimus, enim ex laudantium fuga ad! Qui?`,
  },
  {
    png: faCode,
    title: "Frontend Development",
    info: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur, qui quae maiores quis voluptatibus quas itaque eius ipsum? Animi!`,
  },
  {
    png: faCloudUploadAlt,
    title: "Backend Development",
    info: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex aspernatur, qui quae maiores quis voluptatibus quas itaque eius ipsum? Animi!`,
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

export { skills, info, education, services, projects };
