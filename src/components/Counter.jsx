import React, { useState } from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";

export const Counter = () => {
  const [data, setData] = useState(0);

  return (
    <Grid container spacing={2} sx={{ margin: 2 }}>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => data < 40 && setData(data + 5)}
          disabled={data === 40}
          variant="contained"
          fullWidth
        >
          Increase
        </Button>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4} fullWidth sx={{ alignItems: "center" }}>
        <h1>Count: {data}</h1>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => data > 5 && setData(data - 5)}
          disabled={data === 5}
          variant="contained"
          fullWidth
        >
          Decrease
        </Button>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
};
