import kebabCase from '@/lib/utils/kebabCase';
import { Repo } from 'types/Repo';

export async function getReposTags(repos: Repo[]) {
  const tagCount: Record<string, number> = {};
  // Iterate through each repo, putting all found tags into `tags`
  repos?.forEach((repo) => {
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
