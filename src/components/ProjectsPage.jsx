function ProjectsPage() {
  const projects = [
    {
      title: 'MeetAgain - Meetup Coordination App',
      description: 'A Blazor-based web application for coordinating group meetups with real-time updates.',
      tags: ['Blazor', 'C#', 'Firebase']
    },
    {
      title: 'Farm2Home - Agricultural Platform',
      description: 'Connecting local farmers directly with consumers through modern web technologies.',
      tags: ['Web Dev', 'Database', 'UI/UX']
    },{
      title: 'K&M Arts and Crafts Creation',
      description: 'A web-based arts and crafts e-commerce platform developed as a group project. Features product management, shopping cart functionality, and user authentication for online craft supply shopping.',
      tags: ['Group Project', 'Web Development', 'E-commerce'],
      link: 'https://github.com/MoromasaRen/K-M-Arts-and-Crafts-Creation'
    }
  ]

  return (
    <div className="page">
      <h1 className="page-title">Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectsPage
