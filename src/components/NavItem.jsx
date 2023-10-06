import React from "react";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const NavItem = ({ item }) => {
  return (
    <Grid item xs={item.xs}>
      <Link to={item.path}>
        <Button
          sx={{ marginTop: 1 }}
          variant="contained"
          color="warning"
          fullWidth
        >
          {item.title}
        </Button>
      </Link>
    </Grid>
  );
};
