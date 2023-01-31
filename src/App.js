import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';






function App() {



  return (
    <main className='bg-gray-300 px-8 md:px-20 lg:px-40'>

      <Navbar />

      <Home />

      <Skills />

      <Certificates />

      <Projects />

      <Contact />

    </main>
  );
}

export default App;
