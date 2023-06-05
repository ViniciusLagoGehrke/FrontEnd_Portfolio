import { InferGetStaticPropsType } from 'next'
import siteMetadata from '@/data/siteMetadata'
import RepoList from '@/components/RepoList'
import { PageSEO } from '@/components/SEO'
import { server } from 'lib/config'
import { Repo } from 'types/Repo'

export const getStaticProps = async () => {
  const headers = new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': '*',
  })
  const res = await fetch(`${server}/api/getrepos`, {
    method: 'GET',
    headers: headers,
  })
  console.log(res)
  const repos: Repo[] = await res.json()

  return { props: { repos } }
}

export default function Projects({
  repos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO
        title={`Projects - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
        </div>
        <div className="container py-12">
          {repos ? (
            <RepoList repos={repos} userName={siteMetadata.userName} />
          ) : null}
        </div>
      </div>
    </>
  )
}
