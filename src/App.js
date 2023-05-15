import About from "./components/About";
import Skills from "./components/Skills";
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/> 
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>
      
      <SocialLinks/>
    </div>
  );
}

export default App;
