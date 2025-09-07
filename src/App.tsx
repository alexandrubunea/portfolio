import './App.css';
import Background from './components/Background';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <>
      <Helmet>
        <title>Alexandru Bunea - Portfolio</title>
        <meta name="description" content="Software developer portfolio showcasing full-stack web development, embedded systems, and cybersecurity projects. Experienced in React, Express, Laravel, PHP, ESP32, and Raspberry Pi." />
        <meta name="keywords" content="software developer, full-stack development, React, Express, Laravel, PHP, embedded systems, ESP32, Raspberry Pi, IoT, cybersecurity, API security, authentication, encryption, scalable applications, TailwindCSS, web development portfolio" />
      </Helmet>

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