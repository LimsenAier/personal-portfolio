import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Exploring from "./components/Exploring";
import Contact from "./components/Contact";

import NagaShawls from "./pages/NagaShawls";
import CampusPlus from "./pages/CampusPlus";

import "./App.css";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function Home() {
  return (
    <div className="app">

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Exploring />
        <Contact />
      </main>

    </div>
  );
}


function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/projects/naga-shawls"
          element={<NagaShawls />}
        />

        <Route
          path="/projects/campus-plus"
          element={<CampusPlus />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;