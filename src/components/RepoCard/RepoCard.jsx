import React from "react";
import PropTypes from "prop-types";
import styles from "@/styles/RepoCard.module.css"

function RepoCard({ userName, repo }) {
  return (
    <div key={repo.id}>
      <div className={styles.card_wrapper} >
        <div className={styles.image_wrapper}>
          {/* <img
            src={`https://raw.githubusercontent.com/${userName}/${repo.name}/master/desktop-preview.jpg`}
            alt={repo.name}
          /> */}
        </div>
        <div className={styles.content}>
          <h3>{repo.name}</h3>
          <div className={styles.chips_wrapper}>
            {repo.topics?.length > 0
              ? repo.topics.map((topic) => (
                <div key={topic}>
                  {topic}
                </div>
							  ))
              : null}
          </div>
          <p className={styles.description}>{repo.description}</p>
        </div>
        <div className={styles.buttons_wrapper}>
          <button href={repo.homepage}>
            <span>
						  Visit
            </span>
          </button>
          <button href={repo.html_url}>
            <span>
              Check Code
            </span>
          </button>
        </div>
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
