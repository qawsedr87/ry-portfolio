import React, { useState } from "react";
import {
  Link,
  AppBar,
  Toolbar,
  Container,
  Hidden,
  IconButton,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Menu, ChevronRight } from "@mui/icons-material";

const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Project", href: "#projects" },
  { name: "Resume", href: "/Resume_Louise.pdf" },
];

const useStyles = makeStyles((theme) => ({
  link: {
    paddingRight: 20,
  },
  avatar: {
    marginRight: "auto",
  },
  box: {
    backgroundColor: "#333333", // #51087E
    width: "30vh",
    height: "100%",
  },
  drawerDiv: {
    backgroundColor: "#222222", // #341948
    padding: 12,
  },
  drawLink: {
    paddingTop: 12,
  },
  drawListItem: {
    "&:hover": {
      width: "100%",
      opacity: "0.4",
    },
  },
}));

export default function Header() {
  const styles = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <div className={styles.avatar}></div>
          <Hidden lgDown>
            {navigationLinks.map((item) => (
              <Link
                className={styles.link}
                color="textPrimary"
                variant="button"
                underline="none"
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </Hidden>

          <Hidden lgUp>
            <IconButton>
              <Menu color="secondary" onClick={() => setOpen(true)} />
            </IconButton>
          </Hidden>
        </Toolbar>
      </Container>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <Box className={styles.box}>
          <div className={styles.drawerDiv}>
            <IconButton>
              <ChevronRight color="secondary" onClick={() => setOpen(false)} />
            </IconButton>
          </div>
          <Divider />
          <List>
            {navigationLinks.map((item) => (
              <ListItem className={styles.drawListItem}>
                <Link
                  className={styles.drawLink}
                  color="textPrimary"
                  variant="button"
                  underline="none"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </AppBar>
  );
}
