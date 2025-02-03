import { useState, useEffect, useRef } from "react"
import { Home, User, Code, BookOpen, Briefcase, Mail, Menu, X, FileText } from "lucide-react"
import HomeComponent from "./Home"
import AboutComponent from "./About"
import SkillsComponent from "./Skills"
import EducationComponent from "./Education"
import ProjectsComponent from "./Projects"
import ContactComponent from "./Contact"

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(true)
  const [activeSection, setActiveSection] = useState("Home")
  const sectionRefs = {
    Home: useRef(null),
    About: useRef(null),
    Skills: useRef(null),
    Projects: useRef(null),
    Education: useRef(null),
    Contact: useRef(null),
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current && ref.current.offsetTop <= scrollPosition + 100) {
          setActiveSection(section)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, []) // Removed sectionRefs from dependencies

  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-gray-900 text-white p-5 transition-all duration-500 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-5 right-[-12px] bg-gray-700 p-2 rounded-r-full"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Profile Section */}
        <div className="mt-5 flex flex-col items-center">
          <img
            src="https://i.postimg.cc/d0Pj2KQC/me.jpg"
            alt="Profile"
            className="hidden sm:block w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-gray-400 object-cover"
          />
          {isOpen && <h2 className="mt-2 text-lg font-bold text-center">Your Name</h2>}
        </div>

        {/* Navigation Items */}
        <div className="mt-10 space-y-4">
          <NavItem icon={<Home />} text="Home" isOpen={isOpen} onClick={() => scrollToSection("Home")} />
          <NavItem icon={<User />} text="About" isOpen={isOpen} onClick={() => scrollToSection("About")} />
          <NavItem icon={<Code />} text="Skills" isOpen={isOpen} onClick={() => scrollToSection("Skills")} />
          <NavItem icon={<Briefcase />} text="Projects" isOpen={isOpen} onClick={() => scrollToSection("Projects")} />
          <NavItem icon={<BookOpen />} text="Education" isOpen={isOpen} onClick={() => scrollToSection("Education")} />
          <NavItem icon={<Mail />} text="Contact" isOpen={isOpen} onClick={() => scrollToSection("Contact")} />
          <NavItem
            icon={<FileText />}
            text="Resume"
            isOpen={isOpen}
            onClick={() => window.open("/path-to-your-resume.pdf", "_blank")}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-500 ${isOpen ? "ml-64" : "ml-16"}`}>
        <div ref={sectionRefs.Home}>
          <HomeComponent />
        </div>
        <div ref={sectionRefs.About}>
          <AboutComponent />
        </div>
        <div ref={sectionRefs.Skills}>
          <SkillsComponent />
        </div>
        <div ref={sectionRefs.Projects}>
          <ProjectsComponent />
        </div>
        <div ref={sectionRefs.Education}>
          <EducationComponent />
        </div>
        <div ref={sectionRefs.Contact}>
          <ContactComponent />
        </div>
      </div>
    </div>
  )
}

// Reusable Nav Item Component
function NavItem({ icon, text, isOpen, onClick }) {
  return (
    <div
      className="flex items-center space-x-3 cursor-pointer p-2 rounded-md transition-all duration-500 hover:bg-gray-700 hover:scale-[1.02]"
      onClick={onClick}
    >
      <span className="text-3xl sm:text-2xl">{icon}</span>
      {isOpen && <span className="text-lg">{text}</span>}
    </div>
  )
}

