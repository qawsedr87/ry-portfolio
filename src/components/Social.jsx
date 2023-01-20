import React from "react";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { Grid, Link, IconButton } from "@mui/material";

const socialItem = [
  { icon: GitHub, url: "https://github.com/qawsedr87" },
  // { icon: LinkedIn, url: "/" },
];

export default function Social({ direction }) {
  return (
    <Grid container direction={direction || "row"} spacing={1}>
      {socialItem.map((item) => (
        <Grid item>
          <Link href={item.url} target="_blank">
            <IconButton>
              <item.icon color="secondary" />
            </IconButton>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
