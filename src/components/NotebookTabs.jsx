function NotebookTabs({ currentPage, onPageChange }) {
  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'journey', label: 'My Journey' },
    { id: 'skills', label: 'Skills & Tech' },
    { id: 'projects', label: 'Projects' },
    { id: 'inspirations', label: 'Inspirations' } 
  ]

  return (
    <div className="notebook-tabs">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`tab ${currentPage === tab.id ? 'active' : ''}`}
          onClick={() => onPageChange(tab.id)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  )
}

export default NotebookTabs
