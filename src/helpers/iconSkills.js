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
import quiz from "../img/quiz.png";
import memory from "../img/memory.png";
import twitter from "../img/twitter.png";

export const skills = [
  // {
  //   name: "HTML",
  //   img: html,
  // },
  // {
  //   name: "CSS",
  //   img: css,
  // },
  {
    name: "javascript",
    img: javascript,
  },
  {
    name: "react js",
    img: reactjs,
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
    name: "tailwind ",
    img: tailwind,
  },
  {
    name: "redux",
    img: redux,
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
  {
    name: "git",
    img: git,
  },
];

export const navigation = [
  { name: "inicio", href: "home" },
  { name: "sobre mí", href: "skills" },
  { name: "proyectos", href: "projects" },
];

// export const projects = [
//   {
//     name: "Meli App",
//     img: meliapp,
//     description:
//       "Clon de la app de Mercado Libre donde se puede ver el detalle de cada producto",
//     repo: "https://github.com/MarceeloDominguez/mercado-libre-app",
//     technologies: [{ name: "React Native" }, { name: "React Navigation" }],
//     sizeimage: true,
//   },
//   {
//     name: "YouTube App",
//     img: youtube,
//     description:
//       "Clon de la app de Youtube en donde se pueden buscar los videos por categorías",
//     repo: "https://github.com/MarceeloDominguez/youtube-react-native",
//     technologies: [{ name: "React Native" }, { name: "React Navigation" }],
//     sizeimage: true,
//   },
//   {
//     name: "Control de gastos",
//     img: expense,
//     description: "Aplicación donde puedes controlar tus ingresos y gastos",
//     repo: "https://github.com/MarceeloDominguez/expense_app",
//     technologies: [
//       { name: "React Native" },
//       { name: "Node" },
//       { name: "Express" },
//       { name: "MongoDB" },
//       { name: "React Navigation" },
//     ],
//     sizeimage: true,
//   },
//   {
//     name: "Lista de tareas",
//     img: crudnode,
//     description:
//       "Puedes agregar, editar, eliminar y marcar si la tarea está completa",
//     repo: "https://github.com/MarceeloDominguez/ReactNative_Node.js",
//     technologies: [
//       { name: "React Native" },
//       { name: "Node" },
//       { name: "Express" },
//       { name: "MongoDB" },
//       { name: "React Navigation" },
//     ],
//     sizeimage: true,
//   },
//   {
//     name: "Carrito de compras",
//     img: ecommerce,
//     description: "Lista de productos donde puedes agregar y quitar del carrito",
//     link: "https://ecommercenextjs-r9p5jo704-marceelodominguez.vercel.app/",
//     repo: "https://github.com/MarceeloDominguez/ecommerce-nextjs",
//     technologies: [{ name: "next js" }, { name: "tailwind" }],
//   },
//   {
//     name: "Mercado Libre",
//     img: meli,
//     description:
//       "Clon de la página de Mercado Libre donde se puede ver el detalle de cada producto",
//     link: "https://me-li-challenge-sigma.vercel.app/DetailsScreen/9",
//     repo: "https://github.com/MarceeloDominguez/MeLi-Challenge",
//     technologies: [{ name: "React" }, { name: "Chakra UI" }],
//   },
//   {
//     name: "Pronostico",
//     img: forecast,
//     description:
//       "Pueden encontrar el clima actual y de los próximos días de tu ciudad",
//     link: "https://forecast-6adr3g2kx-marceelodominguez.vercel.app/",
//     repo: "https://github.com/MarceeloDominguez/forecast",
//     technologies: [{ name: "React" }, { name: "Tailwind" }],
//   },
//   {
//     name: "Lista de tareas",
//     img: crud,
//     description:
//       "Puedes agregar, editar, eliminar y marcar si la tarea está completa",
//     link: "https://add-task-v.vercel.app/",
//     repo: "https://github.com/MarceeloDominguez/add-task",
//     technologies: [
//       { name: "react" },
//       { name: "Typescript" },
//       { name: "Tailwind" },
//     ],
//   },
// ];

export const projects = [
  {
    name: "Quiz Play",
    img: quiz,
    description:
      "Un juego de trivia en el que tienes que seleccionar la respuesta correcta y sumar puntos. Hay tres categorías.",
    link: "https://quizplayproyecto1.surge.sh/",
    repo: "https://github.com/MarceeloDominguez/Proyectos-React/tree/master/01-quizplay",
    technologies: [
      { name: "react" },
      { name: "typescript" },
      { name: "tailwind" },
    ],
  },
  {
    name: "Memory Game",
    img: memory,
    description:
      "Un juego de memoria en el que tienes siete oportunidades para adivinar dónde están los emojis",
    link: "https://mgameproyecto2.surge.sh/",
    repo: "https://github.com/MarceeloDominguez/Proyectos-React/tree/master/02-memory-game",
    technologies: [
      { name: "react" },
      { name: "typescript" },
      { name: "tailwind" },
    ],
  },
  {
    name: "Clon de Twitter",
    img: twitter,
    description:
      "Este es un clon de la UI de Twitter en donde se puede navegar entre las dos tabs: 'Para ti' y 'Siguiendo' ",
    link: "https://clone-twitter-03.surge.sh/",
    repo: "https://github.com/MarceeloDominguez/Proyectos-React/tree/master/03-clone-twitter",
    technologies: [
      { name: "react" },
      { name: "typescript" },
      { name: "tailwind" },
    ],
  },
  // {
  //   name: "Lista de tareas",
  //   img: crud,
  //   description:
  //     "Puedes agregar, editar, eliminar y marcar si la tarea está completa",
  //   link: "https://add-task-v.vercel.app/",
  //   repo: "https://github.com/MarceeloDominguez/add-task",
  //   technologies: [
  //     { name: "react" },
  //     { name: "Typescript" },
  //     { name: "Tailwind" },
  //   ],
  // },
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
    name: "Mercado Pago App",
    img: "https://user-images.githubusercontent.com/70117105/216827655-b88c106e-4679-43b5-b065-81b917563a18.png",
    description: "Este proyecto es un clon de la App de Mercado Pago",
    repo: "https://github.com/MarceeloDominguez/mercado_pago_app",
    technologies: [
      { name: "React Native" },
      { name: "React Navigation" },
      { name: "typescript" },
      { name: "expo" },
    ],
    sizeimage: true,
  },
  {
    name: "YouTube App",
    img: youtube,
    description:
      "Clon de la app de Youtube en donde se pueden buscar los videos por categorías",
    repo: "https://github.com/MarceeloDominguez/youtube-react-native",
    technologies: [
      { name: "React Native" },
      { name: "React Navigation" },
      { name: "expo" },
    ],
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
];
