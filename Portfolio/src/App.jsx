import Summary from "./components/Summary";
import Components from "./components/Components";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <main className="max-w-3xl mx-auto px-6">
        <Summary />
        <Components />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App;
