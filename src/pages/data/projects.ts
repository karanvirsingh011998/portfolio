import realtimetrackingScrenshot from "../../assets/images/realtimeTracking.jpg";
import pizzaMenu from "../../assets/images/pizzaMenu.jpg";
import farAway from "../../assets/images/TravelList.png";
import formValidation from "../../assets/images/formValidation.png";

export const projects = [
  {
    title: "Realtime Tracking",
    desc: "This project demonstrates a real-time location tracking application built with Node.js, Express, Socket.io and Leaflet.js. Live location of user is displayed on an interactive map in real-time",
    link: "https://github.com/karanvirsingh011998/realtime-tracking",
    image: realtimetrackingScrenshot,
    techStack: ["Express.js", "Socket.io", "Node.js", "Leaflet"],
  },
  {
    title: "Form Validations",
    desc: "This project demonstrates the form with React hook form and formik, and validations using yup and zod",
    link: "https://karanvirsingh011998.github.io/FormsAndValidations/",
    image: formValidation,
    techStack: ["React.js", "React Hook Form", "Formik", "Yup", "Zod"],
  },
  {
    title: "Far Away - Travel List",
    desc: "Far Away is a React-based packing list application designed to make travel preparations seamless and efficient.",
    link: "https://karanvirsingh011998.github.io/travel_list/",
    image: farAway,
    techStack: ["HTML", "CSS", "React.js","React Dom"],
  }  ,
  {
    title: "Fast Pizza Co.",
    desc: "This project demostrates a pizza shop menu with the available and unavailable pizza's",
    link: "https://github.com/karanvirsingh011998/pizzaMenu",
    image: pizzaMenu,
    techStack: ["HTML", "CSS", "React.js"],
  },
];

export const organizationProjects = [
  
  {
    title: "Flahybase",
    desc: "A biotechnology company website showcasing an AI-driven ecosystem for Precision Oncology. Flahybase develops cutting-edge detection and diagnostic products powered by artificial intelligence and collaborates with leading institutions to advance targeted therapies. The website features a landing page with sections for About, Diagnostics ,Team,and Contact Us.",
    techStack: ["HTML", "CSS", "Next.js"],
    libraries: [
      "Tailwind CSS",
      "react-particles",
      "Formik",
      "Yup",
      "p5-wrapper/react",
      "react-particles"
    ],
    link: "https://flahybase.com"
  },
  {
    title: "FlahyRecovery",
    desc: "FlahyRecovery is a biotechnology company website designed to streamline workflows with dedicated portals for users, admins, and commercial partners. The website features a landing page and User Portal: Allows users to upload and download their reports. Admin Portal: Enables admins to manage user data by uploading and downloading reports, as well as creating new reports and user accounts. Commercial Partner Portal: Allows partners to add new users and upload reports for them if already created.",
    techStack: ["HTML", "CSS", "Next.js", , "Typescript"],
    libraries: [
      "Tailwind CSS",
      "crypto.js",
      "Formik",
      "Yup",
      "next-intl",
    ],
    link: "https://flahyrecovery.com"
  },
  {
    title: "Wil Website",
    desc: "Wits Innovation Lab is an innovative company focused on driving business growth through the power of cutting-edge technologies. This project involved creating a dynamic and user-friendly company website that highlights the lab's commitment to providing businesses with disruptive technologies to solve complex problems.",
    techStack: ["HTML", "CSS", "Next.js", "Typescript"],
    libraries: ["Material UI", "Axios", "React Particles" ,"React Hook Form", "Yup"],
    link:"https://www.thewitslab.com"
  },
  {
    title: "Herbalife Lifestyle Program",
    desc: "The project created an admin and distributor management System.Integrated Recharts library to visualize complex data sets through interactive and customizable charts and graphs, providing valuable insights to users for Dashboard. Collaborated with design teams to translate wireframes and API responses into interactive frontend features, ensuring alignment with project requirements. Integrated Node.js for server-side logic, handling API requests and data management to ensure seamless frontend-backend communication.",
    techStack: ["HTML", "CSS", "React.js", "Typescript"],
    libraries: ["Material UI", "Axios", "React Hook Form", "Yup", "day.js"],
  },
  {
    title: "WePlanIT",
    desc: "Streamlining software projects with customizable workflows, task assignments, and progress tracking. Developed and enhanced frontend features using React.js, integrated Ant Design (antd) components, and utilized Chart.js for data visualization. Used React and Redux for state management in the application along with the use of React Hooks. Build robust backend services and APIs with Node.js and Express.js. Design and implement MongoDB schemas using Mongoose for efficient data storage and retrieval.",
    techStack: ["HTML", "CSS", "Next.js","Node.js","Express.js","MongoDB"],
    libraries: ["redux", "Antd", "Chart.js", "Typescript"],
  },
  {
    title: "Wil Portfolio",
    desc: "Streamlining software projects with customizable workflows, task assignments, and progress tracking. Developed and enhanced frontend features using React.js, integrated Ant Design (antd) components, and utilized Chart.js for data visualization. Used React and Redux for state management in the application along with the use of React Hooks. Build robust backend services and APIs with Node.js and Express.js. Design and implement MongoDB schemas using Mongoose for efficient data storage and retrieval.",
    techStack: ["HTML", "CSS", "React.js", "Strapi"],
    libraries: ["Material UI", "React-pdf"],
  },
];
