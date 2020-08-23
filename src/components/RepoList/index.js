import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
//import ListItem from '@material-ui/core/ListItem';
//import ListItemText from '@material-ui/core/ListItemText';
//import Divider from '@material-ui/core/Divider';
import getRepos from '../../API';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
    width: '100%',
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
  const reposList = getRepos.items
  console.log(reposList);
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="FEM repositories">
      </List>
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