import { info } from "../data";

function Home() {
  return (
    <section id="home" className="text-white scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <p className="text-gray-400">Welcome to my portfolio</p>
        <h1 className="text-4xl font-bold mt-1">
          Hi, I'm <span className="text-blue-400">{info.name}</span>
        </h1>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto">
          I'm a {info.course} student at {info.school}.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <a
            href="#projects"
            className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            See my projects
          </a>
          <a
            href="#contact"
            className="border border-gray-500 text-gray-200 px-5 py-2 rounded hover:border-blue-400 hover:text-blue-400 transition duration-300"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
