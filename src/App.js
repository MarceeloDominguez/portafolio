import BackTopBtn from "./components/BackTopBtn";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContextTheme from "./contextTheme/contextTheme";
import "./css/styles.css";

function App() {
  return (
    <ContextTheme>
      <div>
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Footer />
        <BackTopBtn />
      </div>
    </ContextTheme>
  );
}

export default App;
