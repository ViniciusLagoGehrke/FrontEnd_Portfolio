import useRepos from "../hooks/useRepos";
import Header from "../components/Header"
import RepoList from "../components/RepoList";
import Footer from "../components/Footer";

const userName = "ViniciusLagoGehrke";
const fullName = "Vinicius Gehrke"
const keyWord = "OnPortfolio";
const githubRepos = `https://api.github.com/search/repositories?q=${keyWord}+in:readme+user:${userName}`;

export default function Home() {
  const repos = useRepos({ query: githubRepos });
  return (
    <>
      <Header fullName={fullName}/>
      <main>
        <RepoList repos={repos} userName={userName}/>
      </main>
      <Footer repos={repos} />
    </>
  );
}
