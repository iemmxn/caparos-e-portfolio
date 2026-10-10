import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-800 text-gray-800 min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />

      <footer className="text-center text-sm text-gray-400 py-6">
        © 2026 Emmanuel O. Caparos
      </footer>
    </div>
  );
}

export default App;
