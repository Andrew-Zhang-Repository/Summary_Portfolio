import Summary from "./components/Summary";
import Components from "./components/Components";
import Projects from "./components/Projects";
import Personal from "./components/Personal";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      {/* Professional — dark */}
      <div className="bg-neutral-950 text-neutral-100">
        <main className="max-w-5xl mx-auto px-6">
          <Summary />
          <Components />
          <Projects />
        </main>
      </div>

      {/* Gradient transition zone */}
      <div className="h-32 bg-gradient-to-b from-neutral-950 to-[#828282]" />

      {/* Personal — light */}
      <div className="bg-[#828282] text-neutral-900">
        <main className="max-w-5xl mx-auto px-6">
          <Personal />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
