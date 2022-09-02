import Head from "next/head";
import { Categories, PostCard, PostWidget } from "../components";

const posts = [
  {
    title: "React",
    excerpt: "Learn React",
  },

  {
    title: "React with Tailwind",
    excerpt: "React with Tailwind",
  },
];

const Home = () => (
  <div className="container mx-auto px-10 mb-8">
    <Head>
      <title>Blog</title>
      <link rel="icon" href="/favicon.icon" />
    </Head>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-8 col-span-1">
        {posts.map((post) => (
          <PostCard post={post} key={post.title} />
        ))}
      </div>
      <div className="lg:col-apn-4 col-span-1">
        <div className="lg:sticky relative top-8">
          <PostWidget />
          <Categories />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
