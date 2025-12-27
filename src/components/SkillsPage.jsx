function SkillsPage() {
  const languages = ['C#', 'JavaScript', 'Python', 'C', 'SQL', 'HTML/CSS']
  const tools = ['Blazor', '.NET', 'Firebase', 'Git/GitHub', 'VS Code', 'Figma']
  const knowledge = ['Data Structures', 'Algorithms', 'OOP', 'Web Dev', 'UI/UX Design', 'Databases']

  return (
    <div className="page">
      <h1 className="page-title">Skills & Technologies</h1>
      
      <h2 className="skills-section-title">Programming Languages</h2>
      <div className="skills-grid">
        {languages.map((skill) => (
          <div key={skill} className="skill-badge">{skill}</div>
        ))}
      </div>

      <h2 className="skills-section-title">Frameworks & Tools</h2>
      <div className="skills-grid">
        {tools.map((skill) => (
          <div key={skill} className="skill-badge">{skill}</div>
        ))}
      </div>

      <h2 className="skills-section-title">Knowledge Areas</h2>
      <div className="skills-grid">
        {knowledge.map((skill) => (
          <div key={skill} className="skill-badge">{skill}</div>
        ))}
      </div>
    </div>
  )
}

export default SkillsPage
