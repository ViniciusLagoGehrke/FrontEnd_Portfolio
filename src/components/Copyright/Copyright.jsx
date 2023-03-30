import React from "react";

function Copyright({ ownersGithub }) {
  return (
    <p>Copyright ©{" "}
      <a href={ownersGithub}>
				Visit my GitHub
      </a>{" "}
      {new Date().getFullYear()}
			.
    </p>
  );
}

export default Copyright;
