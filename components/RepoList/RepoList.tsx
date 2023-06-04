import Card from '@/components/Card';
import { Repo } from 'types/Repo';

type RepoListProps = {
  userName: string;
  repos: Repo[];
};

export default function RepoList({ userName, repos }: RepoListProps) {
  return (
    <ul className="grid justify-center gap-4 py-8 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
      {repos?.map((repo) => {
        const { id, name, description, topics, homepage, html_url } = repo;
        const imgSrc = `https://raw.githubusercontent.com/${userName}/${name}/master/desktop-preview.jpg`;

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
        );
      })}
    </ul>
  );
}
