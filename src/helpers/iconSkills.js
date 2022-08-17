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
    color: "bg-blue-200",
    technologies: "Next js - Tailwind",
  },
  {
    name: "proyecto 2",
    img: ecommerce,
    description: "Lorem Ipsum is simply dummy text of the printing",
    color: "bg-orange-400",
    technologies:
      "React js - Typescript - Tailwind React js - Typescript - Tailwind",
  },
  {
    name: "proyecto 3",
    img: ecommerce,
    description: "Lorem Ipsum is simply dummy text of the printing",
    color: "bg-purple-600",
  },
  {
    name: "proyecto 1",
    img: ecommerce,
    description: "Lorem Ipsum is simply dummy text of the printing",
    color: "bg-rose-800",
  },
  // {
  //   name: "proyecto 2",
  //   img: ecommerce,
  //   des: "Lorem Ipsum is simply dummy text of the printing andtypesetting",
  // },
  // {
  //   name: "proyecto 3",
  //   img: ecommerce,
  //   des: "Lorem Ipsum is simply dummy text of the printing andtypesetting",
  // },
];
