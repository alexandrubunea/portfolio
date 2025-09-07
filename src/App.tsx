import './App.css';
import Background from './components/Background';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { preload } from 'react-dom';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    preload('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&display=swap', { as: 'style' });
    preload('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,700;1,400&display=swap', { as: 'style' });
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Background />

        <Navigation />

        <main className="flex-1 max-w-7xl mx-auto">
          <section id="start" className="min-h-screen flex justify-center items-center">
            <Hero />
          </section>

          <div className="space-y-24 py-16">
            <section id="aboutme">
              <AboutMe />
            </section>

            <section id="projects">
              <Projects />
            </section>

            <section id="contact">
              <Contact />
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;