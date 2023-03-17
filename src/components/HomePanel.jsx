import React, { useState, useEffect } from "react";
import {
  Paper,
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Hidden,
  Zoom,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Social from "./Social";
import { StaticImage } from "gatsby-plugin-image";

const useStyles = makeStyles((theme) => ({
  section: {
    height: "90vh",
    position: "relative",
  },
  container: {
    height: "100%",
  },
  content: {
    height: "100%",
    zIndex: 100,
    position: "relative",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 2,
  },
  homeImage: {
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 1,
  },
}));

export default function HomePanel() {
  const styles = useStyles();
  const [shouldShow, setSouldShow] = useState(false);

  useEffect(() => setSouldShow(true));

  return (
    <Paper className={styles.section} id="about">
      {/* make the image is loaded and processed at build time */}
      <StaticImage
        className={styles.homeImage}
        src="https://images.pexels.com/photos/3967143/pexels-photo-3967143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <div className={styles.overlay}></div>

      <Container className={styles.container} maxWidth="md">
        <Grid
          className={styles.content}
          justifyContent="space-between"
          container
          alignItems="center"
        >
          <Zoom in={shouldShow}>
            <Grid item sm={10}>
              <Typography component="h1" variant="h3">
                Hi! Here is Louise Lin!
              </Typography>
              <Box my={2}>
                <Typography variant="h5">
                  Skilled in Full-Stack Web Development. Currently pursuing a
                  Certificate focused in Computer Systems Analysis/Analyst -
                  Applications Programming from University of California, Los
                  Angeles.
                </Typography>
              </Box>
              <Box my={5}>
                <Button
                  href="mailto:louise360992@gmail.com"
                  variant="outlined"
                  color="secondary"
                >
                  Get in touch!
                </Button>
              </Box>
            </Grid>
          </Zoom>

          <Hidden lgDown>
            <Grid item>
              <Social direction="column" />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Paper>
  );
}
