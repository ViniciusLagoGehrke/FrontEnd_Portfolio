import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Copyright from "../../components/Copyright";
import RepoCard from "../../components/RepoCard";

const userName = "ViniciusLagoGehrke";
const keyWord = "OnPortfolio";
const githubRepos = `https://api.github.com/search/repositories?q=${keyWord}+in:readme+user:${userName}`;

// Defining Component Styles //
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  repoList: {
    marginTop: 30,
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Home() {
  const classes = useStyles();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(githubRepos)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data.items);
      });
  }, []);

  return (
    <>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Container>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
								Vinicius Gehrke
              </Typography>
              {/* <Avatar alt="Vinicius Gehrke" src="" /> */}
            </Container>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
							Formally a civil engineer, now a front-end developer with a keen
							interest in new technologies.
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
							This webpage is a showcase for my personal projects and works. It
							was developed with <strong>React</strong> and{" "}
              <strong>Material UI</strong> and and automatically populated using
							the <strong>Github API</strong>.
            </Typography>
          </Container>
        </div>
        {/* End hero unit */}
        {/* Maping data into cards */}
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {repos.map((repo) => repo.name !== "FrontEnd_Portfolio" ? (
              <RepoCard key={repo.id} userName={userName} repo={repo} />
            ) : (
              ""
            ))}
          </Grid>
        </Container>
        {/* End cards section */}
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
					Coded with love!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </>
  );
}
