import React from 'react';

type CopyrightProps = {
  ownersGithub: string
}

function Copyright({ ownersGithub }: CopyrightProps) {
  return (
    <p>
      Copyright © <a href={ownersGithub}>Visit my GitHub</a>{' '}
      {new Date().getFullYear()}.
    </p>
  );
}

export default Copyright;
