import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ResumeIntro from "./components/ResumeIntro";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ResumeIntro />
        <Education />
        <Experience />
        <Certificates />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
