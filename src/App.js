import React, { lazy, Suspense, useState} from "react";
import './App.css';
import Spinner from "./components/Spinner/Spinner";

const Header = lazy(() => import("./components/Header/Header"));
const Intro = lazy(() => import("./components/Intro/Intro"));
const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Community = lazy(() => import("./components/Community/Community"));
const Footer = lazy(() => import("./components/Footer/Footer"));


const AppComponent = () => {
  return ( 
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
  )
}

const App = () => {
  const [loading, setLoading] = useState(false);

  useState(() => {
    let timer = setTimeout(() => setLoading(false), 2000)
    return () => {
      clearTimeout(timer);
    }
  }, []);

  return (
    <Suspense fallback={"Loading..."}>
      { loading ? <Spinner /> : <AppComponent />}
    </Suspense>
  )
};

export default App;

