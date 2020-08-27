import React, { useState, useEffect } from 'react';

function RepoList (){
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');
  const [login, setLogin] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://api.github.com/search/repositories?q=component+in:readme+user:ViniciusLagoGehrke"
    fetch(url)
      .then(res => res.json())
      .then(data=> {
        setData(data);
      });
  }, []);

  const setData = ({
    name,
    contents_url,
    html_url,
    owner
  }) => {
    setName(name);
    setContent(contents_url);
    setUrl(html_url);
    setLogin(owner);
  };

  return
    
  ;
}

export default RepoList;