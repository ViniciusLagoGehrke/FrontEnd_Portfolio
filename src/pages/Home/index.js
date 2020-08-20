import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

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
  cardGrid:{
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
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

const cards = [
  {
    "title": "Article Preview Component",
    "description": "Exercise using JS EventListener and DOM handling, SVG inline to change properties, and responsive layout",
    "link": "https://article-preview-component-zeta.vercel.app/",
    "code": "https://github.com/ViniciusLagoGehrke/ArticlePreviewComponent",
    "image": "https://raw.githubusercontent.com/ViniciusLagoGehrke/ArticlePreviewComponent/master/design/desktop-design.jpg"
  },
  {
    "title": "Four Card Feature Section",
    "description": "Practiced multiple box-shadows including a inset shadow that is 'trimmed' by the container's rounded border.",
    "link": "https://four-card-feature-section-git-master.viniciuslagogehrke.vercel.app/",
    "code": "https://github.com/ViniciusLagoGehrke/Four-card-feature-section",
    "image": "https://raw.githubusercontent.com/ViniciusLagoGehrke/Four-card-feature-section/master/design/desktop-design.jpg"
  },
  {
    "title": "Landing Page with Single Intro",
    "description": "Background-image setup, responsive layout with flexbox and a few hover effects on some buttons.",
    "link": "https://landing-page-with-single-intro.vercel.app/",
    "code": "https://github.com/ViniciusLagoGehrke/landing-page-with-single-intro",
    "image": "https://raw.githubusercontent.com/ViniciusLagoGehrke/landing-page-with-single-intro/master/desktopView.png"
  },
  {
    "title": "Single Price Grid Component Master",
    "description": "On my first exercise I praticed with CSS selectors, variable color in CSS, transform-translate property and more.",
    "link": "https://single-price-grid-component-master-virid-eta.vercel.app/",
    "code": "https://github.com/ViniciusLagoGehrke/Single-Price-Grid-Component-Master",
    "image": "https://raw.githubusercontent.com/ViniciusLagoGehrke/Single-Price-Grid-Component-Master/master/desktop.png"
  }
];

export default function Home() {
  const classes = useStyles();

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
              This website is a showcase exercises where I practiced my skills in HTML, CSS and also JS. The page itself was done with React, Material UI and Github API.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card, index) => (
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