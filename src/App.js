import React, { lazy, Suspense, useState} from "react";
import './App.css';
import Spinner from "./components/Spinner/Spinner";
import { BrowserRouter as Router } from "react-router-dom";
import Loader from "./components/Loader/Loader";

const Header = lazy(() => import("./components/Header/Header"));
const Intro = lazy(() => import("./components/Intro/Intro"));
const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Community = lazy(() => import("./components/Community/Community"));
const Footer = lazy(() => import("./components/Footer/Footer"));


const AppComponent = () => {
  return ( 
    <Router>
      <div className="app">
        <div className='components'>
          <Header />
          <Intro />
          <About />
          <Projects />
          <Community />
          <Footer />
        </div>
      </div>
    </Router>
  )
}

const App = () => {
  const [loading, setLoading] = useState(true);

  useState(() => {
    let timer = setTimeout(() => setLoading(false), 3000)
    return () => {
      clearTimeout(timer);
    }
  }, []);

  return (
    <Suspense fallback={""}>
      { loading ? <Loader /> : <AppComponent />}
    </Suspense>
  )
};

export default App;

