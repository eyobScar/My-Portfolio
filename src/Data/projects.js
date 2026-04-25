import foodDelivery from "../assets/food_delivery.png"
import portfolio from "../assets/portfolio.png"
import future from "../assets/future.png"


export const projects = [
  {
    id: 1,
    title: "Food Delivery",
    description:
      "I built a full-stack food delivery web app where users can easily browse menus, add items to their cart, and place orders with secure online payments. It also includes an admin dashboard to manage orders, users, and menu items. ",
    image: foodDelivery,
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
    image:portfolio,
    category: "Full Stack",
    techs: ["React", "tailwind", "mailjs"],
    liveURL: "https://eyobas-portfolio.vercel.app/",
    githubURL: "https://github.com/eyobScar/portfolio",
  },
  {
    id: 3,
    title: "Work in Progress",
    description:
      "I’m actively building and exploring new ideas through multiple projects. Every day is dedicated to learning, improving, and creating meaningful digital experiences. This is just the beginning—there’s a lot more coming soon.",
    image: future,
    category: "",
    techs: [],
    liveURL: "https://",
    githubURL: "https://github.com/eyobScar",
  },
];
