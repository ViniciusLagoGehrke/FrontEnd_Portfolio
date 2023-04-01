import RepoCard from '../RepoCard';
import styles from '@/styles/RepoList.module.css';
import { Repo } from '@/types';

type RepoListProps = {
  userName: string,
  repos: Repo[]
}
export default function RepoList({ userName, repos }: RepoListProps) {
  return (
    <div className={styles.projects_wrapper}>
      <div className={styles.projects_grid}>
        {repos.map((repo) =>
          repo.name !== 'FrontEnd_Portfolio' ? (
            <RepoCard key={repo.id} userName={userName} repo={repo} />
          ) : (
            ''
          )
        )}
      </div>
    </div>
  );
}
