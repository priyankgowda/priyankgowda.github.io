import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gray-100 p-8"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
              <p className="text-gray-700">
                I'm [Your Name], a passionate developer with a love for creating innovative solutions. My journey in
                tech started [Your Story].
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">What I Do</h2>
              <p className="text-gray-700">
                I specialize in full-stack development, with expertise in both frontend and backend technologies. My
                focus is on creating scalable, efficient, and user-friendly applications.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">My Journey</h2>
              <p className="text-gray-700">
                With [X] years of experience in the industry, I've worked on various projects ranging from [Project
                Types]. Each experience has added to my skillset and perspective.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">My Goals</h2>
              <p className="text-gray-700">
                I'm constantly learning and adapting to new technologies. My goal is to [Your Goals]. I believe in [Your
                Philosophy/Approach].
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About

