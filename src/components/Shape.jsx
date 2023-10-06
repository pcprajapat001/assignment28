import React from "react";
import { Grid, Button, Card, CardContent } from "@mui/material";
import { Xs } from "./Data/index.js";

export const Shape = ({ item }) => {
  return (
    <Grid container spacing={2}>
      {Xs.map((item) => (
        <Grid item xs={item.xs}>
          <Card sx={{ bgcolor: item.clr, margin: 1 }}>
            <CardContent></CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
