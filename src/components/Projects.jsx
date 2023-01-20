import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Chip,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import projectsData from "../data/projectsData";

const useStyles = makeStyles((_theme) => ({
  card: {
    display: "flex",
    "&:hover": {
      boxShadow: "0 5px 10px rgba(255, 255, 255, 0.16)",
    },
  },
  cardContent: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  cardMedia: {
    width: 180,
  },
  link: {
    marginRight: "auto",
  },
  tag: {
    marginRight: 5,
    marginBottom: 5,
  },
}));

function TagContainer({ tags }) {
  const styles = useStyles();

  return (
    <div>
      {tags.map((tag) => (
        <Chip className={styles.tag} label={tag} variant="outlined" />
      ))}
    </div>
  );
}

function Project({ title, description, tags, links }) {
  const styles = useStyles();

  return (
    <Grid item>
      <Card className={styles.card}>
        <CardContent className={styles.cardContent}>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {description}
          </Typography>
          <CardActions>
            <div className={styles.link}>
              {links.map((link) => (
                <IconButton href={link.href}>
                  <link.icon color="secondary" />
                </IconButton>
              ))}
            </div>
            <TagContainer tags={tags} />
          </CardActions>
        </CardContent>
        {/* <Hidden smDown>
          <CardMedia className={styles.cardMedia} image={imageUrl}></CardMedia>
        </Hidden> */}
      </Card>
    </Grid>
  );
}

export default function Projects() {
  return (
    <Container maxWidth="md" id="projects">
      <Box pt={8} mb={2}>
        <Typography variant="h4">Projects</Typography>
      </Box>

      <Grid container direction="column" spacing={4} marginBottom={4}>
        {projectsData?.map((project) => (
          <Project {...project} />
        ))}
      </Grid>
    </Container>
  );
}
