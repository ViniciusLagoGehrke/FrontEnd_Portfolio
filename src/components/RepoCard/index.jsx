import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: "438px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "0.4s ease-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  cardMedia: {
    height: "0",
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: "1",
  },
  chipsWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    marginBottom: ".5rem",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

function RepoCard({ userName, repo }) {
  const classes = useStyles();

  return (
    <Grid item key={repo.id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={`https://raw.githubusercontent.com/${userName}/${repo.name}/master/desktop-preview.jpg`}
          title={repo.name}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h6" component="h2">
            {repo.name}
          </Typography>
          <div className={classes.chipsWrapper}>
            {repo.topics?.length > 0
              ? repo.topics.map((topic) => (
                <Chip key={topic} color="primary" label={topic} />
							  ))
              : null}
          </div>
          <Typography>{repo.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href={repo.homepage}>
						Visit
          </Button>
          <Button size="small" color="primary" href={repo.html_url}>
						Check Code
          </Button>
        </CardActions>
      </Card>
    </Grid>
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
