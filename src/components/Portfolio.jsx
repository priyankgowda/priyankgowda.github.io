import { useState, useEffect, useRef } from "react"
import { Home, User, Code, BookOpen, Briefcase, Mail, FileText, Menu, X } from "lucide-react"
import HomeComponent from "./Home"
import AboutComponent from "./About"
import SkillsComponent from "./Skills"
import EducationComponent from "./Education"
import ProjectsComponent from "./Projects"
import ContactComponent from "./Contact"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("Home")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true) // Track sidebar state
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

    const handleResize = () => {
      if (window.innerWidth < window.innerHeight) {
        setIsSidebarOpen(false) // Close sidebar when width is less than height
      } else {
        setIsSidebarOpen(true) // Keep sidebar open when width > height
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    handleResize() // Run initially to set correct state

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: "smooth" })
    setIsSidebarOpen(false) // Close sidebar after clicking on mobile
  }

  return (
    <div className="flex">
      {/* Sidebar Toggle Button (Mobile) */}
      <button
        className="fixed top-5 left-5 z-50 md:hidden bg-gray-900 text-white p-2 rounded-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-gray-900 text-white p-5 transition-all duration-500 
                    ${isSidebarOpen ? "w-64" : "w-16"} md:w-64 sm:w-16`}
      >
        {/* Profile Section */}
        <div className="mt-5 flex flex-col items-center">
          <img
            src="https://i.imgur.com/JZUYrG1.jpeg"
            alt="Profile"
            className="hidden sm:block w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-gray-400 object-cover"
          />
        </div>

        {/* Navigation Items */}
        <div className="mt-10 space-y-4">
          <NavItem icon={<Home />} text="Home" onClick={() => scrollToSection("Home")} />
          <NavItem icon={<User />} text="About" onClick={() => scrollToSection("About")} />
          <NavItem icon={<Code />} text="Skills" onClick={() => scrollToSection("Skills")} />
          <NavItem icon={<Briefcase />} text="Projects" onClick={() => scrollToSection("Projects")} />
          <NavItem icon={<BookOpen />} text="Education" onClick={() => scrollToSection("Education")} />
          <NavItem icon={<Mail />} text="Contact" onClick={() => scrollToSection("Contact")} />
          <NavItem
            icon={<FileText />}
            text="Resume"
            onClick={() => window.open("https://drive.google.com/file/d/1Co3nggC12EBberLzGA9yAmnnTpfBHb04/view?usp=drivesdk", "_blank")}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-500 ${isSidebarOpen ? "ml-64" : "ml-16"} md:ml-64 sm:ml-16`}>
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
function NavItem({ icon, text, onClick }) {
  return (
    <div
      className="flex items-center space-x-3 cursor-pointer p-2 rounded-md transition-all duration-500 hover:bg-gray-700 hover:scale-[1.02]"
      onClick={onClick}
    >
      <span className="text-3xl sm:text-2xl">{icon}</span>
      <span className="text-lg md:inline sm:hidden">{text}</span>
    </div>
  )
}
