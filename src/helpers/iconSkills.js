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
import crudnode from "../img/crud-node.png";
import meliapp from "../img/meli-app.png";
import youtube from "../img/youtube.png";

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
  { name: "inicio", href: "home" },
  { name: "sobre mí", href: "skills" },
  { name: "proyectos", href: "projects" },
];

export const projects = [
  {
    name: "Meli App",
    img: meliapp,
    description:
      "Clon de la app de Mercado Libre donde se puede ver el detalle de cada producto",
    repo: "https://github.com/MarceeloDominguez/mercado-libre-app",
    technologies: [{ name: "React Native" }, { name: "React Navigation" }],
    sizeimage: true,
  },
  {
    name: "YouTube App",
    img: youtube,
    description:
      "Clon de la app de Youtube en donde se pueden buscar los videos por categorías",
    repo: "https://github.com/MarceeloDominguez/youtube-react-native",
    technologies: [{ name: "React Native" }, { name: "React Navigation" }],
    sizeimage: true,
  },
  {
    name: "Control de gastos",
    img: expense,
    description: "Aplicación donde puedes controlar tus ingresos y gastos",
    repo: "https://github.com/MarceeloDominguez/expense_app",
    technologies: [
      { name: "React Native" },
      { name: "Node" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "React Navigation" },
    ],
    sizeimage: true,
  },
  {
    name: "Lista de tareas",
    img: crudnode,
    description:
      "Puedes agregar, editar, eliminar y marcar si la tarea está completa",
    repo: "https://github.com/MarceeloDominguez/ReactNative_Node.js",
    technologies: [
      { name: "React Native" },
      { name: "Node" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "React Navigation" },
    ],
    sizeimage: true,
  },
  {
    name: "Carrito de compras",
    img: ecommerce,
    description: "Lista de productos donde puedes agregar y quitar del carrito",
    link: "https://ecommercenextjs-r9p5jo704-marceelodominguez.vercel.app/",
    repo: "https://github.com/MarceeloDominguez/ecommerce-nextjs",
    technologies: [{ name: "next js" }, { name: "tailwind" }],
  },
  {
    name: "Mercado Libre",
    img: meli,
    description:
      "Clon de la página de Mercado Libre donde se puede ver el detalle de cada producto",
    link: "https://me-li-challenge-sigma.vercel.app/DetailsScreen/9",
    repo: "https://github.com/MarceeloDominguez/MeLi-Challenge",
    technologies: [{ name: "React" }, { name: "Chakra UI" }],
  },
  {
    name: "Pronostico",
    img: forecast,
    description:
      "Pueden encontrar el clima actual y de los próximos días de tu ciudad",
    link: "https://forecast-6adr3g2kx-marceelodominguez.vercel.app/",
    repo: "https://github.com/MarceeloDominguez/forecast",
    technologies: [{ name: "React" }, { name: "Tailwind" }],
  },
  {
    name: "Lista de tareas",
    img: crud,
    description:
      "Puedes agregar, editar, eliminar y marcar si la tarea está completa",
    link: "https://add-task-v.vercel.app/",
    repo: "https://github.com/MarceeloDominguez/add-task",
    technologies: [
      { name: "react" },
      { name: "Typescript" },
      { name: "Tailwind" },
    ],
  },
];
