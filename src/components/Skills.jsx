import { motion } from "framer-motion"
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPython, FaGitAlt } from "react-icons/fa"
import {
  SiTailwindcss,
  SiDjango,
  SiFlask,
  SiNumpy,
  SiPandas,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiOpencv,
} from "react-icons/si"

const SkillIcon = ({ Icon, name, proficiency }) => (
  <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center m-4 relative group">
    <Icon size={80} className="text-gray-700" />
    <p className="mt-2 font-medium">{name}</p>
    <motion.div
      initial={{ width: 0 }}
      whileHover={{ width: "100%" }}
      className="absolute bottom-0 left-0 h-1 bg-blue-500"
      style={{ width: `${proficiency}%` }}
    />
    <motion.div
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      className="absolute -top-12 bg-gray-800 text-white px-3 py-1 rounded text-sm"
    >
      Proficiency: {proficiency}%
    </motion.div>
  </motion.div>
)

const SkillSection = ({ title, skills }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold mb-6">{title}</h2>
    <div className="flex flex-wrap justify-center bg-white rounded-lg shadow-lg p-6">
      {skills.map((skill, index) => (
        <SkillIcon key={index} {...skill} />
      ))}
    </div>
  </div>
)

const Skills = () => {
  const skillCategories = {
    languages: [
      { name: "Python", Icon: FaPython, proficiency: 90 },
      { name: "JavaScript", Icon: FaJs, proficiency: 85 },
      { name: "HTML", Icon: FaHtml5, proficiency: 95 },
      { name: "CSS", Icon: FaCss3Alt, proficiency: 90 },
    ],
    frameworks: [
      { name: "React", Icon: FaReact, proficiency: 90 },
      { name: "Django", Icon: SiDjango, proficiency: 80 },
      { name: "Flask", Icon: SiFlask, proficiency: 75 },
      { name: "Tailwind", Icon: SiTailwindcss, proficiency: 85 },
    ],
    databases: [
      { name: "MySQL", Icon: SiMysql, proficiency: 85 },
      { name: "PostgreSQL", Icon: SiPostgresql, proficiency: 80 },
      { name: "MongoDB", Icon: SiMongodb, proficiency: 75 },
    ],
    libraries: [
      { name: "NumPy", Icon: SiNumpy, proficiency: 80 },
      { name: "Pandas", Icon: SiPandas, proficiency: 85 },
      { name: "OpenCV", Icon: SiOpencv, proficiency: 75 },
    ],
    other: [{ name: "Git", Icon: FaGitAlt, proficiency: 85 }],
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gray-100 p-8"
    >
      <h1 className="text-4xl font-bold mb-12 text-center">My Skills</h1>
      <div className="max-w-6xl mx-auto">
        <SkillSection title="Languages" skills={skillCategories.languages} />
        <SkillSection title="Frameworks" skills={skillCategories.frameworks} />
        <SkillSection title="Databases" skills={skillCategories.databases} />
        <SkillSection title="Libraries" skills={skillCategories.libraries} />
        <SkillSection title="Other Tools" skills={skillCategories.other} />
      </div>
    </motion.div>
  )
}

export default Skills

