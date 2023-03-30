import { useState, useEffect } from 'react';

export default function useRepos({ query }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(query)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data.items);
      });
  }, [query]);

  return repos;
}
