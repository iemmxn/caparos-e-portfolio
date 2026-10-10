import { education, experience, skills } from "../data";

function Resume() {
  return (
    <section id="resume" className="scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-white border-b-4 border-blue-500 inline-block pb-1 mb-6">
          Resume
        </h2>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="font-bold text-blue-600 mb-2">Education</h3>
          {education.map((item) => (
            <div key={item.school} className="mb-6">
              <p className="font-medium">{item.school}</p>
              <p className="text-gray-600 text-sm">{item.detail}</p>
            </div>
          ))}

          <h3 className="font-bold text-blue-600 mb-2">Experience</h3>
          {experience.map((item) => (
            <div key={item.title} className="mb-6">
              <p className="font-medium">{item.title}</p>
              <p className="text-gray-600 text-sm">{item.detail}</p>
            </div>
          ))}

          <h3 className="font-bold text-blue-600 mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
