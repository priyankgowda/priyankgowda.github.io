"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faFileAlt } from "@fortawesome/free-solid-svg-icons"
import RotatingText from "./RotatingText"

const AnimatedButton = ({ onClick, className, children }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.1, y: -5 }}
    whileTap={{ scale: 0.95 }}
    className={`inline-block ${className}`}
  >
    {children}
  </motion.button>
)

const Home = () => {
  const [displayText, setDisplayText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [showRotatingText, setShowRotatingText] = useState(false)
  const [showButtons, setShowButtons] = useState(false)
  const fullText = "Hi, I'm Priyank Gowda."

  useEffect(() => {
    let index = 0
    setDisplayText("") // Reset the text initially

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
        setIsTypingComplete(true)
        setTimeout(() => {
          setShowRotatingText(true)
          setTimeout(() => {
            setShowButtons(true)
          }, 500)
        }, 500)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

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
        className="text-5xl font-bold mb-6 text-gray-700"
      >
        {displayText}
      </motion.h1>

      <AnimatePresence>
        {showRotatingText && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-700 mb-8 flex items-center"
          >
            I'm a&nbsp;
            <RotatingText
              texts={["Pythonist", "AI/ML Enthusiast","Quick Learner", "Data Scientist","Problem Solver"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showButtons && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <AnimatedButton
              onClick={() => window.open("https://www.linkedin.com/in/priyankgowda", "_blank")}
              className="w-14 h-14 bg-white text-[#0077b5] rounded-full hover:bg-[#0077b5] hover:text-white transition duration-300 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </AnimatedButton>
            <AnimatedButton
              onClick={() => window.open("https://www.github.com/priyankgowda", "_blank")}
              className="w-14 h-14 bg-white text-black rounded-full hover:bg-black hover:text-white transition duration-300 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </AnimatedButton>
            <AnimatedButton
              onClick={() => window.open("https://drive.google.com/file/d/1Co3nggC12EBberLzGA9yAmnnTpfBHb04/view?usp=drivesdk", "_blank")}
              className="w-14 h-14 bg-white text-gray-700 rounded-full hover:bg-gray-700 hover:text-white transition duration-300 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faFileAlt} size="2x" />
            </AnimatedButton>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Home
