import emailIcon from '../assets/icons8-gmail-50.png'
import githubIcon from '../assets/icons8-github-24.png'
import linkedinIcon from '../assets/icons8-linkedin-50.png'
import resumeIcon from '../assets/icons8-resume-50.png'
import profileImage from '../assets/rat.jpg'
import LightIcon from '../assets/icons8-light-mode-78.png'      // ← ADD
import DarkIcon from '../assets/icons8-dark-mode-50.png'       // ← ADD
     // ← ADD

function Sidebar({ theme }) {  // ← ADD { theme } PROPS
  const { isLight, isDark, isSystem, setThemeMode } = theme || {}  // ← ADD

  return (
    <div className="sidebar">
      <img src={profileImage} alt="Profile" className="profile-pic-img" />
      <div className="profile-name">TheRodent</div>
      <div className="profile-title">CS Student</div>
      <div className="contact-links">
        <a href="mailto:vonraynmal@gmail.com" className="contact-link">
          <img src={emailIcon} alt="Email" className="contact-icon" />
          Email
        </a>
        <a href="https://github.com/justrayn" target="_blank" rel="noopener noreferrer" className="contact-link">
          <img src={githubIcon} alt="GitHub" className="contact-icon" />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/von-rayn-malingin-a135882a2/" target="_blank" rel="noopener noreferrer" className="contact-link">
          <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" />
          LinkedIn
        </a>
        <a href="#" className="contact-link">
          <img src={resumeIcon} alt="Resume" className="contact-icon" />
          Resume
        </a>
      </div>

      {/* ↓↓↓ ADD THIS ENTIRE THEME TOGGLE SECTION ↓↓↓ */}
      <div className="theme-toggle">
        <button 
          className={`theme-btn ${isLight ? 'active' : ''}`}
          onClick={() => setThemeMode('light')}
          title="Light Mode"
        >
          <img src={LightIcon} alt="Light" className="theme-icon" />
        </button>
        <button 
          className={`theme-btn ${isDark ? 'active' : ''}`}
          onClick={() => setThemeMode('dark')}
          title="Dark Mode"
        >
          <img src={DarkIcon} alt="Dark" className="theme-icon" />
        </button>
        
      </div>
      {/* ↑↑↑ END THEME TOGGLE ↑↑↑ */}
    </div>
  )
}

export default Sidebar
