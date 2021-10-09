import React from 'react';

import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

import Button from '@material-ui/core/Button';
import useStyles from './styles.js';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]


function App() {
  const classes = useStyles();

  return (
    <div>

      <>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <PhotoCamera className={classes.icon} />
            <Typography variant="h6">
              Photo Album
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.container}>
            <Container maxWidth="sm">
              <Typography variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom>
                Photo Things N' Stuff
              </Typography>
              <Typography variant="h5"
                align="center"
                color="textSecondary"
                paragraph>
                You'll see that we have several variants in the text tag which feature similar h values like in HTML
                as well as alignment attributes and things like "paragraph" which shows that it's comparable
                to a p tag or a textPrimary which acts as kind of a header.
              </Typography>
              <div className={classes.button}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="secondary">
                      Lasagna!
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Say Wha?
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>

              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4} lg={3} xl={2}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image Title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5">
                        Heading
                        <Typography>
                          This is a media card. You can use this section to describe the content.
                        </Typography>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">View</Button>
                      <Button size="small" color="primary">Edit</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}

            </Grid>
          </Container>
        </main>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary">
            Something here to give the footer a purpose
          </Typography>
        </footer>
      </>

    </div>
  )
}

export default App;
