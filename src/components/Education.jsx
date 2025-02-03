import { motion } from "framer-motion"
import { FaGraduationCap, FaUniversity, FaSchool } from "react-icons/fa"

const TimelineItem = ({ year, degree, institution, description, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-8 flex justify-between items-center w-full"
  >
    <div className="order-1 w-5/12"></div>
    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
      <Icon className="mx-auto text-white" />
    </div>
    <motion.div whileHover={{ scale: 1.05 }} className="order-1 bg-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
      <h3 className="mb-3 font-bold text-gray-800 text-xl">{degree}</h3>
      <h4 className="mb-3 font-semibold text-gray-700">{institution}</h4>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-sm font-semibold text-gray-600 mt-2">{year}</p>
    </motion.div>
  </motion.div>
)

const Education = () => {
  const educationHistory = [
    {
      year: "2022",
      degree: "Master's in Computer Science",
      institution: "University of Technology",
      description: "Focused on advanced algorithms and machine learning.",
      icon: FaGraduationCap,
    },
    {
      year: "2020",
      degree: "Bachelor's in Software Engineering",
      institution: "State University",
      description: "Learned fundamentals of software development and project management.",
      icon: FaUniversity,
    },
    {
      year: "2016",
      degree: "High School Diploma",
      institution: "City High School",
      description: "Excelled in mathematics and computer science courses.",
      icon: FaSchool,
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gray-100 p-8"
    >
      <h1 className="text-4xl font-bold mb-6">My Education</h1>
      <div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
            style={{ left: "50%" }}
          ></div>
          {educationHistory.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Education

