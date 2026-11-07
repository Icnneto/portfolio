import { projects } from "../content/projects/projects"
import { T } from "../../components/Localized"

export default function ProjectsPage() {
  return (
    <div className="section">
      <h2 className="section-heading">
        <T en="Selected Work" pt="Projetos selecionados" />
      </h2>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3 className="project-name">
              {project.name}
              {project.status && (
                <span className="project-status">
                  <T en={project.status.en} pt={project.status.pt} />
                </span>
              )}
            </h3>
            {project.award.en && (
              <p className="project-tech">
                <T en={project.award.en} pt={project.award.pt} />
              </p>
            )}
            <p className="body-text">
              <T en={project.description.en} pt={project.description.pt} />
            </p>
            {project.bullets?.map((bullet, index) => (

              <ul key={index} className="project-bullets">
                <li>
                  <p className="project-bullets-title">
                    <T en={bullet.title.en} pt={bullet.title.pt} />
                  </p>
                  <p className="project-bullets-description">
                    <T en={bullet.description.en} pt={bullet.description.pt} />
                  </p>
                </li>
              </ul>

            ))}
            <p className="project-tech">{project.tech}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-link">
                <T en="view project →" pt="ver projeto →" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
