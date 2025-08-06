import { GetStaticPaths, GetStaticProps } from 'next';
import { posts } from '../../data/posts';

export default function Post({ post }: { post: any }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = posts.map(post => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = posts.find(p => p.slug === params?.slug);
  return {
    props: { post },
  };
};