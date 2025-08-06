import Link from 'next/link';
import { posts } from '../data/posts';

export default function Home() {
  return (
    <div>
      <h1>My Blog</h1>
      {posts.map(post => (
        <div key={post.slug}>
          <h2>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </h2>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}