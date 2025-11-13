export default function ProjectsPage() {
  const projects = [
    {
      name: "Project One",
      award: "Example Award · 2025",
      description: "A description of your amazing project that showcases your skills and technical expertise.",
      tech: "React, TypeScript, Next.js, Tailwind CSS",
      link: "https://github.com/yourusername/project-one"
    },
    {
      name: "Project Two",
      award: "Another Award · 2025",
      description: "Another impressive project that demonstrates your ability to solve complex problems.",
      tech: "Node.js, PostgreSQL, Express, Docker",
      link: "https://github.com/yourusername/project-two"
    },
    {
      name: "Project Three",
      award: "Recognition · 2025",
      description: "Yet another project showcasing your diverse skillset and commitment to quality.",
      tech: "Python, FastAPI, Machine Learning",
      link: "https://github.com/yourusername/project-three"
    }
  ]

  return (
    <div className="section">
      <h2 className="section-heading">Selected Work</h2>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3 className="project-name">{project.name}</h3>
            {project.award && <p className="project-tech">{project.award}</p>}
            <p className="body-text">{project.description}</p>
            <p className="project-tech">{project.tech}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-link">
              view project →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
