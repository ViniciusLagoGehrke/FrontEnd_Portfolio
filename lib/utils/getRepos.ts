import kebabCase from '@/lib/utils/kebabCase';
import { Repo } from 'types/Repo';

export default async function getRepos(url: string) {
  const res = await fetch(url);
  const data = await res.json();
  const repos: Repo[] = data.items;

  return repos;
}

// TODO: refactor into contentlayer once compute over all docs is enabled
export async function getReposTags(repos: Repo[]) {
  const tagCount: Record<string, number> = {};
  // Iterate through each post, putting all found tags into `tags`
  repos.forEach((repo) => {
    if (repo.topics?.length > 0) {
      repo.topics.forEach((tag) => {
        const formattedTag = kebabCase(tag);
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1;
        } else {
          tagCount[formattedTag] = 1;
        }
      });
    }
  });

  return tagCount;
}
