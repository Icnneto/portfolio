
/*
 * BLOG POST FORMATTING GUIDE
 *
 * To add a new blog post, create a new .mdx file in app/(public)/content/blog/
 * Its Brazilian Portuguese edition, if any, goes next to it as <id>.pt.mdx (same frontmatter fields, translated).
 *
 * Format:
 * ---
 * title: "Your Blog Post Title"
 * date: "Month DD, YYYY"
 * readTime: "X min read"
 * excerpt: "A brief summary that appears in the blog list view"
 * tags: ["tag1", "tag2"]
 * ---
 *
 * # Your content here
 *
 * Write your blog post using Markdown or MDX (React components)!
 */

import { loadBlogPosts } from '../../utils/loadBlogPosts';
import BlogPostItem from './BlogPostItem';
import { T } from '../../components/Localized';

export default async function BlogPage() {
  const blogPosts = await loadBlogPosts();

  if (blogPosts.length === 0) {
    return (
      <div className="section">
        <h2 className="section-heading">Blog</h2>
        <p className="body-text">
          <T
            en="Coming soon. Thoughts on software development, technology, and building great products."
            pt="Em breve. Reflexões sobre desenvolvimento de software, tecnologia e construção de bons produtos."
          />
        </p>
      </div>
    );
  }

  return (
    <div className="section">
      <h2 className="section-heading">Blog</h2>
      <p className="body-text">
        <T
          en="Thoughts on software development, technology, and building great products."
          pt="Reflexões sobre desenvolvimento de software, tecnologia e construção de bons produtos."
        />
      </p>

      <div className="blog-list">
        {blogPosts.map((post) => (
          <BlogPostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
