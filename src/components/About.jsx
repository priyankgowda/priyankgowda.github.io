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
                I'm a passionate developer and an AIML engineering student at BGS Institute of Technology. 
                I enjoy problem-solving and coding, always striving to bring 100% effort to my work. My journey in tech began 
                with my love for building real-world applications that make an impact.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">What I Do</h2>
              <p className="text-gray-700">
                I specialize in full-stack development, working with both frontend and backend technologies. 
                My expertise includes Python, Django, Flask, JavaScript, React, MySQL, PostgreSQL, and MongoDB. 
                I also explore AI/ML applications, integrating them into scalable and efficient solutions.
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
                With experience in hackathons, coding clubs, and hands-on projects like the "Intruder Detection and 
                Alerting System," I've gained a deep understanding of AI, web development, and cloud computing. 
                I'm also building projects like a pet care app and a civic issue reporting platform, aiming to solve 
                real-world problems.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">My Goals</h2>
              <p className="text-gray-700">
                I’m constantly learning and experimenting with new technologies. My goal is to become a skilled full-stack 
                developer and leverage AI/ML to create impactful applications. I believe in learning by building, embracing 
                challenges, and continuously improving my skills.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
