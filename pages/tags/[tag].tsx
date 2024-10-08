import { TagSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import kebabCase from '@/lib/utils/kebabCase'
import { getAllTags, allCoreContent } from '@/lib/utils/contentlayer'
import { getReposTags } from '@/lib/utils/getReposTags'
import mergeTagCounts from 'lib/utils/mergeTagCounts'
import { InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'
import { server } from 'lib/config'
import { Repo } from 'types/Repo'

export async function getStaticPaths() {
  const headers = new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': '*',
  })
  const res = await fetch(`${server}/api/getrepos`, {
    method: 'GET',
    headers: headers,
  })

  const repos: Repo[] = await res.json()

  const blogTags = await getAllTags(allBlogs)
  const repoTags = await getReposTags(repos)

  const tags = mergeTagCounts(blogTags, repoTags)

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const headers = new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': '*',
  })
  const res = await fetch(`${server}/api/getrepos`, {
    method: 'GET',
    headers: headers,
  })

  const repos: Repo[] = await res.json()

  const tag = context.params.tag as string

  const filteredPosts = allCoreContent(
    allBlogs?.filter(
      (post) => post.draft !== true && post.tags.map((t) => kebabCase(t)).includes(tag)
    )
  )

  const filteredRepos = repos?.filter((repo) => repo.topics.map((t) => kebabCase(t)).includes(tag))

  return { props: { posts: filteredPosts, repos: filteredRepos, tag } }
}

export default function Tag({ posts, repos, tag }: InferGetStaticPropsType<typeof getStaticProps>) {
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  return (
    <>
      <TagSEO
        title={`${tag} - ${siteMetadata.title}`}
        description={`${tag} tags - ${siteMetadata.author}`}
      />
      <ListLayout posts={posts} repos={repos} title={title} />
    </>
  )
}
