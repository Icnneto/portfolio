import Link from 'next/link'

export default function BlogPage() {
  const posts = [
    {
      id: "example-post-1",
      title: "Getting Started with Next.js 15",
      date: "November 2025",
      description: "An introduction to the latest features in Next.js 15 and how to get started building modern web applications."
    },
    {
      id: "example-post-2",
      title: "Building Scalable React Applications",
      date: "October 2025",
      description: "Best practices and architectural patterns for building maintainable and scalable React applications."
    },
    {
      id: "example-post-3",
      title: "TypeScript Tips and Tricks",
      date: "September 2025",
      description: "Advanced TypeScript techniques to write more type-safe and maintainable code."
    }
  ]

  return (
    <div className="section">
      <h2 className="section-heading">Blog</h2>
      <p className="body-text">
        Thoughts on software development, technology, and building great products.
      </p>

      <div className="blog-list">
        {posts.map((post) => (
          <div key={post.id} className="blog-item">
            <div className="blog-header">
              <Link href={`/blog/${post.id}`} className="text-link">
                <h3 className="blog-title">{post.title}</h3>
              </Link>
              <p className="blog-meta">{post.date}</p>
            </div>
            <p className="body-text">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
