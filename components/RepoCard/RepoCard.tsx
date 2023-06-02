import React from 'react'
import { Repo } from 'types/Repo'
import Link from 'next/link'

type RepoCardProps = {
  userName: string
  repo: Repo
}

function RepoCard({ userName, repo }: RepoCardProps) {
  const bgImage = `url(https://raw.githubusercontent.com/${userName}/${repo.name}/master/desktop-preview.jpg)`

  return (
    <div
      key={repo.id}
      className="font-mono justify-self-center h-full max-w-xs min-w-80 min-h-96 flex flex-col justify-between ease-in-out duration-300 rounded overflow-hidden shadow dark:shadow-sm dark:shadow-white scale-100 hover:scale-105"
    >
      <div
        className="aspect-video bg-cover bg-center overflow-hidden bg-no-repeat"
        style={{ backgroundImage: bgImage }}
      ></div>
      <div className="grow">
        <h3 className="font-sans p-2 mb-2">{repo.name}</h3>
        <div className="flex justify-start flex-wrap px-2 gap-2">
          {repo.topics?.length > 0
            ? repo.topics.map((topic) => (
                <div key={topic} className="rounded-full text-white bg-sky-800 py-1 px-2 text-sm">
                  <span>{topic}</span>
                </div>
              ))
            : null}
        </div>
        <p className="p-2">{repo.description}</p>
      </div>
      <div className="h-8 px-4 flex flex-nowrap justify-start items-center gap-4">
        <Link href={repo.homepage}>
          <span className="hover:text-sky-600">Visit</span>
        </Link>
        <Link href={repo.html_url}>
          <span className="hover:text-sky-600">Check Code</span>
        </Link>
      </div>
    </div>
  )
}

export default RepoCard
