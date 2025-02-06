import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, description, image, technologies, githubLink }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden relative group flex flex-col"
  >
    <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6 flex-grow">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-700 text-base mb-4">{description}</p>
      <div className="flex flex-wrap mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
    <motion.a
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-4 right-4 bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-800"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaGithub size={18} />
      View on GitHub
    </motion.a>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
      image: "https://via.placeholder.com/300x150",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubLink: "https://github.com/yourusername/e-commerce-platform",
    },
    {
      title: "Task Management App",
      description: "A responsive web application for managing tasks and projects with real-time updates.",
      image: "https://via.placeholder.com/300x150",
      technologies: ["React", "Firebase", "Material-UI"],
      githubLink: "https://github.com/yourusername/task-management-app",
    },
    {
      title: "Weather Forecast Dashboard",
      description: "An interactive dashboard displaying weather forecasts using data from a third-party API.",
      image: "https://via.placeholder.com/300x150",
      technologies: ["React", "Chart.js", "OpenWeatherMap API"],
      githubLink: "https://github.com/yourusername/weather-forecast-dashboard",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gray-100 p-8"
    >
      <h1 className="text-4xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;