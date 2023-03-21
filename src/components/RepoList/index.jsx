import React from "react";
import { makeStyles } from "@mui/material/styles";
import List from "@mui/material/List";
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';
// import getRepos from "../../API";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

/*
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
*/

function RepoList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="FEM repositories" />
    </div>
  );
}

/*
    <div className={classes.root}>
      <List component="nav" aria-label="FEM repositories">
        {reposList.map((repo)=>(
          console.log(repo.full_name)
        ))}
      </List>
    </div>

          <ListItemLink key={repo} href={repo.html_url}>
          <ListItemText primary={repo.full_name} />
          </ListItemLink>
*/

export default RepoList;
