function JourneyPage() {
  return (
    <div className="page">
      <h1 className="page-title">My Journey</h1>
      <div className="timeline">
        <div className="timeline-item">
          <div className="date">2023 - Present</div>
          <h3>Third Year CS Student</h3>
          <p>Currently diving deep into advanced topics like data structures, algorithms, and software engineering.</p>
        </div>
        <div className="timeline-item">
          <div className="date">2022 - 2023</div>
          <h3>Second Year - Foundation Building</h3>
          <p>Learned OOP, database management, and web development fundamentals.</p>
        </div>
        <div className="timeline-item">
          <div className="date">2021 - 2022</div>
          <h3>First Year - The Beginning</h3>
          <p>Started my journey in Computer Science with C and Python.</p>
        </div>
        <div className="timeline-item">
          <div className="date">Future Goals</div>
          <h3>Looking Ahead</h3>
          <p>Aiming to secure a developer role and contribute to open source projects.</p>
        </div>
      </div>
    </div>
  )
}

export default JourneyPage
