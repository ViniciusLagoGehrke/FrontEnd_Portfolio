import { Repo } from 'types/Repo'

export default async function getRepos(url: string) {
  const res = await fetch(url)
  const data = await res.json()
  const repos: Repo[] = data.items

  return repos
}
