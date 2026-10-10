import { useState } from "react";

// one project card, it has its own "show details" state
function ProjectCard(props) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white text-gray-800 rounded-xl shadow-lg p-5 border-t-4 border-blue-500 hover:-translate-y-1 transition duration-300">
      <h3 className="font-bold text-lg">{props.title}</h3>
      <p className="text-gray-600 text-sm mt-1">{props.short}</p>

      {showDetails && (
        <p className="mt-3 text-sm text-gray-700">{props.details}</p>
      )}

      <button
        onClick={() => setShowDetails(!showDetails)}
        className="mt-4 text-blue-600 text-sm font-medium hover:underline"
      >
        {showDetails ? "Show Less" : "View More"}
      </button>
    </div>
  );
}

export default ProjectCard;
