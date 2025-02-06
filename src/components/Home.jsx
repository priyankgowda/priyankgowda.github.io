import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const AnimatedButton = ({ href, className, children }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.1, y: -5 }}
    whileTap={{ scale: 0.95 }}
    className={`inline-block ${className}`}
  >
    {children}
  </motion.a>
)

const Home = () => {
  const [text, setText] = useState("")
  const fullText = "Full stack developer, pythonist, data scientist"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 100)
    }
  }, [index, text])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gray-100 p-8 flex flex-col justify-center items-center"
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-4xl font-bold mb-6"
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl text-gray-700 mb-8"
      >
        Hi, I'm Priyank Gowda. I'm a {text}
      </motion.p>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center"
      >
        <AnimatedButton
          href="#Contact"
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Contact Me
        </AnimatedButton>
        <AnimatedButton
          href="#About"
          className="bg-gray-600 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition duration-300"
        >
          Read More
        </AnimatedButton>
        <AnimatedButton
          href="/path-to-your-resume.pdf"
          target="_blank"
          rel="./assets/resume.pdf"
          className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition duration-300"
        >
          Resume
        </AnimatedButton>
      </motion.div>
    </motion.div>
  )
}

export default Home

