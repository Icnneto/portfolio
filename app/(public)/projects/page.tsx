import { projects } from "@/data/projects"

export default function ProjectsPage() {
  return (
    <div className="section">
      <h2 className="section-heading">Selected Work</h2>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3 className="project-name">{project.name}</h3>
            {project.award && <p className="project-tech">{project.award}</p>}
            <p className="body-text">{project.description}</p>
            {project.bullets?.map((bullet, index) => (

              <ul key={index} className="project-bullets">
                <li>
                  <p className="project-bullets-title">{bullet.title}</p>
                  <p className="project-bullets-description">{bullet.description}</p>
                </li>
              </ul>

            ))}
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
