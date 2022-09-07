import reactjs from "../img/react.png";
import javascript from "../img/javascript.png";
import css from "../img/css.png";
import html from "../img/html.png";
import tailwind from "../img/tailwind.png";
import mongo from "../img/mongo.png";
import redux from "../img/redux.png";
import node from "../img/node.png";
import git from "../img/git.png";
import typescript from "../img/typescript.png";
import firebase from "../img/firebase.png";
import ecommerce from "../img/ecommerce.png";
import crud from "../img/crud.png";
import expense from "../img/expense.png";
import meli from "../img/meli.png";
import forecast from "../img/forecast.png";

export const skills = [
  {
    name: "HTML",
    img: html,
  },
  {
    name: "CSS",
    img: css,
  },
  {
    name: "javascript",
    img: javascript,
  },
  {
    name: "tailwind ",
    img: tailwind,
  },
  {
    name: "git",
    img: git,
  },
  {
    name: "react js",
    img: reactjs,
  },
  {
    name: "redux",
    img: redux,
  },
  {
    name: "react native",
    img: reactjs,
  },
  {
    name: "typescript",
    img: typescript,
  },
  {
    name: "firebase",
    img: firebase,
  },
  {
    name: "node",
    img: node,
  },
  {
    name: "mongoDB",
    img: mongo,
  },
];

export const navigation = [
  { name: "home", href: "home" },
  { name: "skills", href: "skills" },
  { name: "projects", href: "projects" },
];

export const projects = [
  {
    name: "shopping cart",
    img: ecommerce,
    description: "List of products where you can add and remove from the cart",
    link: "https://ecommercenextjs-r9p5jo704-marceelodominguez.vercel.app/",
    repo: "https://github.com/MarceeloDominguez/ecommerce-nextjs",
    technologies: [{ name: "Next js" }, { name: "Tailwind" }],
  },
  {
    name: "CRUD",
    img: crud,
    description: "You can add, edit, delete and mark if the task is complete",
    link: "https://add-task-v.vercel.app/",
    repo: "https://github.com/MarceeloDominguez/add-task",
    technologies: [{ name: "Typescript" }, { name: "Tailwind" }],
  },
  {
    name: "meli challenge",
    img: meli,
    description:
      "Clone of the meli page where you can see the details of each product",
    link: "https://me-li-challenge-sigma.vercel.app/DetailsScreen/9",
    repo: "https://github.com/MarceeloDominguez/MeLi-Challenge",
    technologies: [{ name: "React" }, { name: "Chakra ui" }],
  },
  {
    name: "forecast",
    img: forecast,
    description: "Finder of the current and extended forecast of your city",
    link: "https://forecast-6adr3g2kx-marceelodominguez.vercel.app/",
    repo: "https://github.com/MarceeloDominguez/forecast",
    technologies: [{ name: "React" }, { name: "Tailwind" }],
  },
  {
    name: "expense control",
    img: expense,
    description: "Application where you can control your income and expenses",
    repo: "https://github.com/MarceeloDominguez/expense_app",
    technologies: [
      { name: "React Native" },
      { name: "Node" },
      { name: "MongoDB" },
    ],
  },
];
