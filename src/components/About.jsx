import { info } from "../data";

function About() {
  return (
    <section id="about" className="scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-white border-b-4 border-blue-500 inline-block pb-1 mb-6">
          About Me
        </h2>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-gray-700">
            I'm {info.name}, a {info.course} student at {info.school}.
          </p>
          <p className="text-gray-700 mt-2">
            One fun fact about me is I like adventure and riding.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
