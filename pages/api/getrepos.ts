import siteMetadata from '@/data/siteMetadata'
import { NextApiRequest, NextApiResponse } from 'next'
import { Repo } from 'types/Repo'

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const res = await fetch(siteMetadata.githubRepos)
  const data = await res.json()
  const repos: Repo[] = data.items

  response.setHeader('Cache-Control', 's-maxage=86400')
  response.status(200).json(repos)
}
