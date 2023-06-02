import RepoCard from '../RepoCard'
import { Repo } from 'types/Repo'

type RepoListProps = {
  userName: string
  repos: Repo[]
}

export default function RepoList({ userName, repos }: RepoListProps) {
  return (
    <div className="py-8 grid sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 justify-center">
      {repos.map((repo) =>
        repo.name !== 'FrontEnd_Portfolio' ? (
          <RepoCard key={repo.id} userName={userName} repo={repo} />
        ) : (
          ''
        )
      )}
    </div>
  )
}
