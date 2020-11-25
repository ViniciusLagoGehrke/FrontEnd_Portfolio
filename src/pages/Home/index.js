import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';

import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import profile from '../../assets/img/Profile.jpeg';
import background from "../../assets/css/background.css";
import Copyright from '../../components/Copyright';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
  },
});

// Defining Component Styles //
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroWrapper: {
    height: '85vh',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '80%'
  },
  heroProfile: {
    position: 'relative',
  },
  avatar: {
    height: 'auto',
    width: '200px',
  },
  name:{
    backgroundColor: 'orange',
    opacity: '0.8',
    borderRadius: '8px',
    position: 'absolute',
    top: '90%',
    left: '45%',
    padding: theme.spacing(2),
  },
  about: {
    height: '50vh',
    backgroundColor: '#DFDBE5',
    backgroundImage: background,
    padding: theme.spacing(8, 0, 6),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardGrid:{
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    minHeight: '438px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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



export default function Home(props) {
  const classes = useStyles(props);

  const [repos, setRepos] = useState([]);

  const userName = "ViniciusLagoGehrke"
  const keyWord = "OnPortfolio"

  useEffect(() => {
    const githubRepos = `https://api.github.com/search/repositories?q=${keyWord}+in:readme+user:${userName}`

    fetch(githubRepos)
      .then(res => res.json())
      .then(data=> {
        setRepos(data.items)
      });
  }, []);

  return(
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <main>
          {/* Hero unit */}
          <Container className={classes.heroWrapper}>
            <Container className={classes.heroContainer} maxWidth="md">
              <Container className={classes.heroProfile}>
                <Avatar className={classes.avatar} alt="Vinicius Gehrke" src={profile} />
                <Typography className={classes.name} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                  Vinicius<br />Gehrke
                </Typography>
              </Container>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Father of two wonderful Sapiens and husband of a beautiful Black Queen.
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Formally a civil engineer, now a front-end developer with a keen interest in GIS and maps.
              </Typography>            
            </Container>
          </Container>
          {/* End hero unit */}
          {/* About this Portfolio */}
          <Container className={classes.about}>
            <Typography className={classes.aboutText} variant="h5" align="center" color="textSecondary" paragraph>This webpage is a showcase for my personal projects and works. It was developed with <strong>React</strong> and <strong>Material UI</strong> and and automatically populated using the <strong>Github API</strong>.
                </Typography>
            <Container></Container>
          </Container>
          {/* End About */}
          {/* Maping Repos data into cards */}
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {repos.map(repo => (
                repo.name !== "FrontEnd_Portfolio" ? (
                  <Grid item key={repo.id} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={`https://raw.githubusercontent.com/${userName}/${repo.name}/master/desktop-preview.jpg`}
                        title={repo.name}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {repo.name}
                        </Typography>
                        <Typography>
                          {repo.description}
                        </Typography>
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
                ) : ""
              ))}
            </Grid>
          </Container>
          {/* End cards section */}
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Coded with love!
          </Typography>
          <Copyright />
        </footer>
        {/* End footer */}
      </ThemeProvider>
    </CssBaseline>

  );
}