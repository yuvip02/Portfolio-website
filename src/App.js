import About from './components/About';
import Contact from './components/Contact';
import Design from './components/Design';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Technologies from './components/Technologies';


function App() {
  return (

    <div className=''>
        <NavBar/>
        <Home/>
        <About/>
        <Technologies/>
        <Skills/>
        <Design/>
        <Projects/>
        <Contact/>
    </div>
      
  
  );
}

export default App;
