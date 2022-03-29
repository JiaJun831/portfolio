import logo from './logo.svg';
import './App.css';
import About from "./component/About";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import Skills from "./component/Skills";
// import Testimonials from "./components/Testimonials";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Project />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}

export default App;
