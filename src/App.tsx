import './App.css';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gradient-to-br from-zinc-100 to-zinc-300">
      <div className="min-h-screen flex flex-col">
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
    </div>
  );
}

export default App;