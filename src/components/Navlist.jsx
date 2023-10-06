import React from "react";
import { Grid, Button, Card, CardContent } from "@mui/material";
import { Xs } from "./Data";
import { NavItem } from "./NavItem";

export const NavList = () => {
  return (
    <Grid container spacing={2}>
      {Xs.map((item) => (
        <NavItem item={item} />
      ))}
    </Grid>
  );
};
