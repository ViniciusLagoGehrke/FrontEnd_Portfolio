import Header from '../components/Header';
import RepoList from '../components/RepoList';
import Footer from '../components/Footer';
import { Repo } from '@/types';

type HomeProps = {
  repos: Repo[]
}

const userName = 'ViniciusLagoGehrke';
const fullName = 'Vinicius Gehrke';
const keyWord = 'OnPortfolio';
const githubRepos = `https://api.github.com/search/repositories?q=${keyWord}+in:readme+user:${userName}`;

export default function Home({ repos }: HomeProps) {
  const ownersGithub = repos ? repos[0].owner.html_url : '/';
  return (
    <>
      <Header fullName={fullName} />
      <main>
        {repos
          ? <RepoList repos={repos} userName={userName} />
          : null
        }
      </main>
      <Footer ownersGithub={ownersGithub} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(githubRepos)
  const data = await res.json()
  const repos: Repo[] = data.items;

  return {
    props: {
      repos,
    },
  }
}