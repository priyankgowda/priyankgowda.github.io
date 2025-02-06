import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RotatingText from './RotatingText';
// Import if using React Router
// import { Link } from 'react-router-dom';

const AnimatedButton = ({ onClick, className, children }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.1, y: -5 }}
    whileTap={{ scale: 0.95 }}
    className={`inline-block ${className}`}
  >
    {children}
  </motion.button>
);

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showRotatingText, setShowRotatingText] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const fullText = "Hi, I'm Priyank Gowda.";

  const handleContactClick = () => {
    // Add your contact logic here
    console.log("Contact button clicked");
    // You could scroll to a contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeClick = () => {
    // Add your resume download/view logic here
    console.log("Resume button clicked");
    // You could open resume in new tab
    window.open('/path-to-your-resume.pdf', '_blank');
  };

  useEffect(() => {
    let index = 0;
    setDisplayText(""); // Reset the text initially
    
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setIsTypingComplete(true);
        setTimeout(() => {
          setShowRotatingText(true);
          setTimeout(() => {
            setShowButtons(true);
          }, 500);
        }, 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

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
              texts={['Full Stack Developer', 'Pythonist', 'AI/ML Enthusiast', 'Data Scientist']}
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
            className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center"
          >
            <AnimatedButton
              onClick={handleContactClick}
              className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 cursor-pointer"
            >
              Contact Me
            </AnimatedButton>
            <AnimatedButton
              onClick={handleResumeClick}
              className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition duration-300 cursor-pointer"
            >
              Resume
            </AnimatedButton>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Home;