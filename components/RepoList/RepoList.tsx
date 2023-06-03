import Card from '@/components/Card'
import { Repo } from 'types/Repo'

type RepoListProps = {
  userName: string
  repos: Repo[]
}

export default function RepoList({ userName, repos }: RepoListProps) {
  return (
    <ul className="py-8 grid sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 justify-center">
      {repos.map((repo) => {
        const { id, name, description, topics, homepage, html_url } = repo
        const imgSrc = `https://raw.githubusercontent.com/${userName}/${name}/master/desktop-preview.jpg`

        return name !== 'FrontEnd_Portfolio' ? (
          <Card
            key={id}
            title={name}
            description={description}
            imgSrc={imgSrc}
            href={homepage}
            tags={topics}
            code={html_url}
          />
        ) : (
          ''
        )
      })}
    </ul>
  )
}
