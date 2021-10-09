import React from 'react';

import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  }
}))

function App() {
  const classes = useStyles();

  return (
    <div>

      <>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <PhotoCamera />
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
                to a p tag or a textPrimary which acts as kind of a header. I'm making this paragraph long to
                show what a long, descriptive paragraph would look like. Also, "gutterBottom" would be a cool band name.
              </Typography>
              <div>
                <Grid container spaceing={2} justify="center">
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
          {/* <ButtonGroup variant="contained"
            aria-label="outlined primary button group">
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup> */}
        </main>
      </>

    </div>
  )
}

export default App;
