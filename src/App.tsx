import './App.css';
import Background from './components/Background';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';

function App() {

  return (
    <>
      <Background />
      <Navigation />
      <div className="flex flex-col gap-y-16">
        <Hero />
        <AboutMe />
      </div>
    </>
  )
}

export default App
