import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import NotebookTabs from './components/NotebookTabs'
import AboutPage from './components/AboutPage'
import JourneyPage from './components/JourneyPage'
import SkillsPage from './components/SkillsPage'
import ProjectsPage from './components/ProjectsPage'
import InspirationsPage from './components/InspirationsPage'

function App() {
  const [currentPage, setCurrentPage] = useState('about')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const pages = {
    about: <AboutPage />,
    journey: <JourneyPage />,
    skills: <SkillsPage />,
    projects: <ProjectsPage />,
    inspirations: <InspirationsPage />
  }

  const handlePageChange = (newPage) => {
    if (newPage === currentPage || isTransitioning) return
    
    setIsTransitioning(true)
    
    setTimeout(() => {
      setCurrentPage(newPage)
      setIsTransitioning(false)
    }, 400)
  }

  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <NotebookTabs 
          currentPage={currentPage} 
          onPageChange={handlePageChange}
          isTransitioning={isTransitioning}
        />
        <div className="pages-wrapper">
          {Object.keys(pages).map((pageKey) => (
            <div
              key={pageKey}
              className={`page-slide ${
                pageKey === currentPage ? 'active' : 'inactive'
              }`}
            >
              {pages[pageKey]}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
