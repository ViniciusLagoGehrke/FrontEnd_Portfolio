import { InferGetStaticPropsType } from 'next';
// import { allBlogs } from 'contentlayer/generated'
// import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
// import { sortedBlogPost, allCoreContent } from '@/lib/utils/contentlayer'
import RepoList from '@/components/RepoList';
import { server } from 'lib/config';
import { Repo } from 'types/Repo';

// const MAX_DISPLAY = 5

export const getStaticProps = async () => {
  // TODO: move computation to get only the essential frontmatter to contentlayer.config
  // const sortedPosts = sortedBlogPost(allBlogs)
  // const posts = allCoreContent(sortedPosts)
  const res = await fetch(`${server}/api/getrepos`);
  const repos: Repo[] = await res.json();

  return { props: { repos } };
};

export default function Home({
  repos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <section className="flex h-96 flex-col justify-center space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-lg font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
          Hi, I'm Vinicius from Earth! 🖖
        </h1>
        <div>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.intro.first}
          </p>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.intro.second}
          </p>
        </div>
      </section>
      <section className="divide-y divide-gray-200 dark:divide-gray-700">
        <h2 className="text-md font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
          Projects
        </h2>
        {repos ? (
          <RepoList repos={repos} userName={siteMetadata.userName} />
        ) : null}
      </section>
      {/* {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )} */}
    </>
  );
}
