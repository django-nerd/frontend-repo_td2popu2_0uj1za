import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function DecorativeBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-0" aria-hidden>
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-fuchsia-300/30 via-purple-300/30 to-sky-300/30 blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-tr from-rose-300/25 via-amber-200/25 to-violet-300/25 blur-3xl" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <DecorativeBackground />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
