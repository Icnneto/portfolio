export default function ContactPage() {
  return (
    <div className="section">
      <h2 className="section-heading">Get in touch</h2>

      <p className="body-text">
        I enjoy learning and sharing what I know, and I'm always excited to connect with others, whether to collaborate, explore new opportunities, or simply chat about tech and new ideas.
      </p>

      <div className="contact-info">
        <p className="body-text">
          <span className="contact-label">Email:</span> israelnetonunes@gmail.com
        </p>
        <p className="body-text">
          <span className="contact-label">GitHub:</span>{" "}
          <a href="https://github.com/Icnneto" target="_blank" rel="noopener noreferrer" className="text-link">
            @Icnneto
          </a>
        </p>
        <p className="body-text">
          <span className="contact-label">LinkedIn:</span>{" "}
          <a href="https://www.linkedin.com/in/icnneto/" target="_blank" rel="noopener noreferrer" className="text-link">
            /in/icnneto
          </a>
        </p>
      </div>

      <div className="highlight-section">
        <p className="body-text">
          Feel free to reach out via email or connect with me on any of the platforms above!
        </p>
      </div>
    </div>
  )
}
