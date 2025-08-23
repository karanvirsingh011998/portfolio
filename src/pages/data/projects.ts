import realtimetrackingScrenshot from "../../assets/images/realtimeTracking.jpg";
import pizzaMenu from "../../assets/images/pizzaMenu.jpg";
import farAway from "../../assets/images/TravelList.png";
import formValidation from "../../assets/images/formValidation.png";
import convokLandingPage from "../../assets/images/convokLandingPage.png";
import oribtal from "../../assets/images/orbital.png";
import fitfocus from "../../assets/images/fitfocus.png";
import Aurelius from "../../assets/images/Aurelius.png";


export const projects = [
  {
    title: "ConvoK - Real-Time Communication Redefined",
    desc: "Experience the future of communication with ConvoK! This innovative web app offers secure, real-time chat with dark and light mode support.",
    link: "https://karanvirsingh011998.github.io/convoK",
    image: convokLandingPage,
    techStack: [
      "React.js",
      "Shadcn",
      "Tailwind CSS",
      "Framer Motion",
      "React Hook Form",
      "Yup",
    ],
  },
  {
    title: "Orbital - Next-gen products in an immersive digital experience",
    desc: "Explore cutting-edge AI assistants, robotics, drones and wearable technology through interactive 3D showcases and futuristic interfaces.",
    link: "https://orbital-lovable.vercel.app/",
    image: oribtal,
    techStack: [
      "React.js",
      "Shadcn",
      "Tailwind CSS",
      "Framer Motion",
      "Lovable",
      "vercel",
    ],
  },
  {
    title: "FitFocus - Your Personal Fitness Companion",
    desc: "Transform Your Body,Empower Your Mind. Join FitFocus — Where Strength Meets Community",
    link: "https://deluxe-pavlova-4700b4.netlify.app/",
    image: fitfocus,
    techStack: [
      "React.js",
      "Shadcn",
      "Tailwind CSS",
      "Framer Motion",
      "Bolt.new",
      "Netlify"
    ],
  },
  {
    title: "Aurelius - Luxury Redefined for Every Woman  (In-progress)",
    desc: "Discover our exquisite collection of artificial jewellery that combines timeless elegance with modern sophistication. Luxury shouldn't be limited.",
    link: "https://shimmer-style-website.lovable.app/",
    image: Aurelius,
    techStack: [
      "React.js",
      "Shadcn",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Lovable",
      "Vercel",
    ],
  },
  {
    title: "Realtime Tracking",
    desc: "This project demonstrates a real-time location tracking application built with Node.js, Express, Socket.io and Leaflet.js. Live location of user is displayed on an interactive map in real-time",
    link: "https://github.com/karanvirsingh011998/realtime-tracking",
    image: realtimetrackingScrenshot,
    techStack: ["Express.js", "Socket.io", "Node.js", "Leaflet"],
    libraries: []
  },
  {
    title: "Form Validations",
    desc: "This project demonstrates the form with React hook form and formik, and validations using yup and zod",
    link: "https://karanvirsingh011998.github.io/FormsAndValidations/",
    image: formValidation,
    techStack: ["React.js", "React Hook Form", "Formik", "Yup", "Zod"],
    libraries: []
  },
  {
    title: "Far Away - Travel List",
    desc: "Far Away is a React-based packing list application designed to make travel preparations seamless and efficient.",
    link: "https://karanvirsingh011998.github.io/travel_list/",
    image: farAway,
    techStack: ["HTML", "CSS", "React.js", "React Dom"],
  },
  {
    title: "Fast Pizza Co.",
    desc: "This project demostrates a pizza shop menu with the available and unavailable pizza's",
    link: "https://github.com/karanvirsingh011998/pizzaMenu",
    image: pizzaMenu,
    techStack: ["HTML", "CSS", "React.js"],
    libraries: []
  },
];

export const organizationProjects = [
  {
    title: "Pixel Print Studios",
    desc: "Pixel Prints Studios is your one-stop destination for all your printing, gifting, and corporate branding needs. We specialize in high-quality custom printing services, offering everything from T-shirt printing to brochures, business cards, banners, and more. In addition to our printing services, we offer a wide range of personalized gifting options, perfect for special occasions or unique corporate gifts. Whether you’re looking for promotional merchandise, custom-designed gifts, or branded items for your business, Pixel Prints Studios delivers high-quality products with a professional touch.",
    link: "https://www.pixelprintstudios.in/",
    techStack: ["Next.js", "Typescript", "Vercel"],
    libraries: ["Shadcn", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Postkodes",
    desc: "Seamless Cargo And Parcel Handling Solution For Everyone",
    link: "https://postkodes.com/",
    techStack: ["React.js"],
    libraries: ["React Barcode", "Formik", "Axios", "React Slick"],
  },
  {
    title: "Community Schools Connection",
    desc: "Community Schools Connection - A centralized admin dashboard for schools to manage feeds, groups, and members with role-based access, analytics, and secure controls—enhancing community engagement and collaboration.",
    link: "https://communityschools.resourceportal.com/",
    techStack: ["Next.js", "Typescript"],
    libraries: ["Material UI", "Socket IO" , "React Big Calendar", "Yup", "Formik", "React Responsive Carousel", "Redux"],
  },
  {
    title: "Encapsulate",
    desc: "A CRM integration project that connects user accounts with Capsulate CRM. The application allows users to manage their profiles, edit details, and configure settings, including the ability to disconnect their Capsulate account seamlessly. The project ensures smooth data synchronization and a user-friendly experience for managing CRM connections.",
    techStack: ["HTML", "CSS", "Next.js", "Typescript"],
    libraries: ["Material UI", "Fromik", "Yup", "React Redux", "React Helmet"],
    link: "https://capsulecrm.lusites.xyz/"
  }, {
    title: "Flahybase",
    desc: "A biotechnology company website showcasing an AI-driven ecosystem for Precision Oncology. Flahybase develops cutting-edge detection and diagnostic products powered by artificial intelligence and collaborates with leading institutions to advance targeted therapies. The website features a landing page with sections for About, Diagnostics ,Team,and Contact Us.",
    techStack: ["HTML", "CSS", "Next.js"],
    libraries: [
      "Tailwind CSS",
      "react-particles",
      "Formik",
      "Yup",
      "p5-wrapper/react",
      "react-particles",
    ],
    link: "https://flahybase.com",
  },
  {
    title: "FlahyRecovery",
    desc: "FlahyRecovery is a biotechnology company website designed to streamline workflows with dedicated portals for users, admins, and commercial partners. The website features a landing page and User Portal: Allows users to upload and download their reports. Admin Portal: Enables admins to manage user data by uploading and downloading reports, as well as creating new reports and user accounts. Commercial Partner Portal: Allows partners to add new users and upload reports for them if already created.",
    techStack: ["HTML", "CSS", "Next.js", , "Typescript"],
    libraries: ["Tailwind CSS", "crypto.js", "Formik", "Yup", "next-intl"],
    link: "https://flahyrecovery.com",
  },
  {
    title: "Balance Pilates Studio",
    desc: "Fitness Admin Dashboard - Designed and developed an admin-only dashboard for a boutique fitness studio offering personalized exercise bed classes. The dashboard presents real-time business metrics such as Active Customers, Expired Subscriptions, Delinquent Accounts, Total Revenue, and Weekly Bookings. It includes dynamic charts for Monthly Revenue, Weekly Booking Trends, and Delinquency Rate (%), providing actionable insights at a glance. Admins can manage Customers, Classes, Plans, and Payments through clean, responsive tables. This project showcases my ability to build functional, data-centric admin interfaces tailored for operational efficiency.",
    techStack: ["HTML", "CSS", "React.js", "Vite", "Lovable", "Typescript"],
    libraries: ["Tailwind CSS", "Recharts", "Shadcn"],
    link: "https://balancestudio.com.ar/",
  },
  {
    title: "Mesh-HR",
    desc: "Internal Communication, Events & Document Management Dashboard - Developed a role-based internal dashboard using Next.js and NextAuth for secure authentication and admin-invited user access. The platform includes a post management system where authenticated users can create, edit, and share updates. Built a rich event management system with support for title, description, location, images, and scheduling, validated via Formik and Yup, and visualized using React Big Calendar with RSVP options (“Interested” / “Going”). Introduced a document library module that allows users to create folders and upload files within them, enhancing organized internal file sharing. Zustand was used for global state management, and the entire platform was styled with Tailwind CSS for a responsive, modern UI",
    techStack: ["HTML", "CSS", "React.js", "Next.js", "Typescript"],
    libraries: ["Tailwind CSS", "Next-auth", "Formik", "Yup", "Zustand"],
  }, 
  {
    title: "Wil Website",
    desc: "Wits Innovation Lab is an innovative company focused on driving business growth through the power of cutting-edge technologies. This project involved creating a dynamic and user-friendly company website that highlights the lab's commitment to providing businesses with disruptive technologies to solve complex problems.",
    techStack: ["HTML", "CSS", "Next.js", "Typescript"],
    libraries: [
      "Material UI",
      "Axios",
      "React Particles",
      "React Hook Form",
      "Yup",
    ],
    link: "https://www.thewitslab.com",
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
    techStack: ["HTML", "CSS", "Next.js", "Node.js", "Express.js", "MongoDB"],
    libraries: ["Redux", "Antd", "Chart.js", "Typescript"],
    link: "https://planit.thewitslab.com"

  },
  {
    title: "Wil Portfolio",
    desc: "Streamlining software projects with customizable workflows, task assignments, and progress tracking. Developed and enhanced frontend features using React.js, integrated Ant Design (antd) components, and utilized Chart.js for data visualization. Used React and Redux for state management in the application along with the use of React Hooks. Build robust backend services and APIs with Node.js and Express.js. Design and implement MongoDB schemas using Mongoose for efficient data storage and retrieval.",
    techStack: ["HTML", "CSS", "React.js", "Strapi"],
    libraries: ["Material UI", "React-pdf"],
  },
];
