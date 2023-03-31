import { useState, useEffect } from 'react';
import { Repo } from '@/types';

type UseReposProps ={
  query: string
}

export default function useRepos({ query }: UseReposProps) {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch(query)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data.items as Repo[]);
      });
  }, [query]);

  return repos;
}
