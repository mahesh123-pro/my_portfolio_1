import Header from './components/Header';
import Hero from './components/Hero';
import BentoAbout from './components/BentoAbout';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-secondary/25 selection:text-neutral-900">
      {/* Navigation Header */}
      <Header />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Landing */}
        <Hero />

        {/* Bento Profile Details */}
        <BentoAbout />

        {/* Projects Flagships */}
        <Projects />

        {/* Skill ecosystems */}
        <Skills />

        {/* Services provided */}
        <Services />

        {/* Professional Roadmap */}
        <Timeline />

        {/* Contact sync form */}
        <Contact />
      </main>

      {/* Footer credits */}
      <Footer />
    </div>
  );
}

export default App;
