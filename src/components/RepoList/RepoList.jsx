import RepoCard from "../RepoCard"
import styles from "@/styles/RepoList.module.css"

export default function RepoList({ userName, repos }) {
  return (
    <div className={styles.projects_wrapper} >
      <div className={styles.projects_grid}>
        {repos.map((repo) => repo.name !== "FrontEnd_Portfolio" ? (
          <RepoCard key={repo.id} userName={userName} repo={repo} />
        ) : (
          ""
        ))}
      </div>
    </div>
  );
}