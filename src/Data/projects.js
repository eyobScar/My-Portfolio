import foodDelivery from "../assets/food_delivery.png";
import portfolio from "../assets/portfolio.png";
import future from "../assets/future.png";

export const projects = [
  {
    id: 1,
    title: "Food Delivery",
    description:
      "I built a full-stack food delivery web app where users can easily browse menus, add items to their cart, and place orders with secure online payments. It also includes an admin dashboard to manage orders, users, and menu items. ",
    image: "food_delivery.webp",
    image2x: "food_delivery@2x.webp",
    category: "Full Stack",
    techs: ["React", "Node.js", "MongoDB", " Stripe"],
    liveURL: "https://eyobas-food-delivery-frontend.onrender.com/",
    githubURL: "https://github.com/eyobScar/eyob-portfolio.git",
  },
  {
    id: 2,
    title: "My Portfolio",
    description:
      "A modern and responsive portfolio website built using React and Tailwind CSS to showcase my projects, skills, and experience. The application focuses on clean design, smooth user experience, and mobile-friendly layouts.",
    image: "portfolio.webp",
    image2x: "portfolio@2x.webp",
    category: "Full Stack",
    techs: ["React", "tailwind", "mailjs"],
    liveURL: "https://eyobas-portfolio.vercel.app/",
    githubURL: "https://github.com/eyobScar/portfolio",
  },
  {
    id: 3,
    title: "Doctor Appointment",
    description:
      "A full-stack doctor appointment booking web application that allows users to register, log in, and book appointments with doctors. It features secure authentication with JWT and a clean, responsive UI with smooth user experience.",
    image: "doctor_appointment.webp",
    image2x: "doctor_appointment.webp",
    category: "Full Stack",
    techs: ["React", "Tailwind", "Node.js", "Stripe", "MongoDB"],
    liveURL: "https://eyobas-doctor-appointment-client.onrender.com/",
    githubURL: "https://github.com/eyobScar/Doctor-Appointment.git",
  },
];
