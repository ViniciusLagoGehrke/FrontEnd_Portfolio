import React from "react";
// import Image from "next/image";
import PropTypes from "prop-types";
import styles from "@/styles/RepoCard.module.css"
import Link from "next/link";

function RepoCard({ userName, repo }) {
  const bgImage = `url(https://raw.githubusercontent.com/${userName}/${repo.name}/master/desktop-preview.jpg)`;
  
  return (
    <div key={repo.id} className={styles.card_wrapper} >
      <div className={styles.image_wrapper}
        style={{backgroundImage: bgImage}}
      ></div>
      <div className={styles.content}>
        <h3>{repo.name}</h3>
        <div className={styles.chips_wrapper}>
          {repo.topics?.length > 0
            ? repo.topics.map((topic) => (
              <div key={topic}>
                <p>{topic}</p>
              </div>
							  ))
            : null}
        </div>
        <p className={styles.description}>{repo.description}</p>
      </div>
      <div className={styles.links_wrapper}>
        <Link href={repo.homepage}>
          <span>
						  Visit
          </span>
        </Link>
        <Link href={repo.html_url}>
          <span>
              Check Code
          </span>
        </Link>
      </div>
    </div>
  );
}

RepoCard.propTypes = {
  userName: PropTypes.string.isRequired,
  repo: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    topics: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    homepage: PropTypes.string,
    html_url: PropTypes.string,
  }).isRequired
};

export default RepoCard;
