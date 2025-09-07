import './App.css';
import Background from './components/Background';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Background />
      <Navigation />
      <div className="flex flex-col gap-y-16 mb-5">
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
