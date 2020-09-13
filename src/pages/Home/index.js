import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
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

  return(
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              FRONT END MENTOR PORTFOLIO
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Father of two wonderful Sapiens and husband of a beautiful Black Queen.
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>Formally a civil engineer, now a front-end developer with a keen interest in new technologies.
            </Typography>
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