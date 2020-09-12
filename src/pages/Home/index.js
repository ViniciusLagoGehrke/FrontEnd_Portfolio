import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import dadosIniciais from '../../data/initial_data.json'; 
//import RepoList from '../../API';
//import RepoList from '../../components/RepoList';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/ViniciusLagoGehrke">
      Visit my GitHub
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons:{
    marginTop: theme.spacing(4),
  },
  repoList:{
    marginTop: 30,
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  cardGrid:{
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: '0.4s ease-out',
    '&:hover': {
      transform: 'scale(1.05)',
    }
  },
  cardMedia:{
    height: '0',
    paddingTop: '56.25%', //16:9
  },
  cardContent:{
    flexGrow: 'initial',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = dadosIniciais;

console.log(cards);

export default function Home() {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');
  const [login, setLogin] = useState('');
  //const [error, setError] = useState(null);

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

  return(
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            FRONT END MENTOR PORTFOLIO
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              FRONT END MENTOR PORTFOLIO
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              This website is a showcase exercises where I practiced my skills in HTML, CSS and also JS. The page itself was done using React, Material UI and the Github API.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" >
                    List Repositories
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
            <Grid>
              <Typography component="h3" variant="h3" align="center" color="textPrimary">
                List Repositories
              </Typography>
              <List component="nav" aria-label="FEM repositories">
                {name}
                {content}
                {url}
                {login}                
              </List>
            </Grid>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.projects.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title={card.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href={card.link}>
                      Visit
                    </Button>
                    <Button size="small" color="primary" href={card.code}>
                      Check Code
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Coded with love!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}