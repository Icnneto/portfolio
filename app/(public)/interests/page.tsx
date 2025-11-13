import Link from 'next/link'

export default function InterestsPage() {
  const interests = [
    {
      id: "technology",
      title: "Technology & Innovation",
      description: "Exploring the latest advancements in software development, AI, and emerging technologies."
    },
    {
      id: "design",
      title: "Design & User Experience",
      description: "Creating beautiful and intuitive interfaces that users love to interact with."
    },
    {
      id: "learning",
      title: "Continuous Learning",
      description: "Always learning new skills, frameworks, and best practices to stay current in the field."
    }
  ]

  return (
    <div className="section">
      <h2 className="section-heading">Interests</h2>
      <p className="body-text">
        Things I'm passionate about and enjoy exploring in my free time.
      </p>

      <div className="blog-list">
        {interests.map((interest) => (
          <div key={interest.id} className="blog-item">
            <div className="blog-header">
              <Link href={`/interests/${interest.id}`} className="text-link">
                <h3 className="blog-title">{interest.title}</h3>
              </Link>
            </div>
            <p className="body-text">{interest.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
