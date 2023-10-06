import React, { useState, useEffect } from "react";
import { Grid, Typography, TextField, Card, CardContent } from "@mui/material";
import axios from "axios";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setData(result.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          UserDetails
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Search" />
      </Grid>
      {data.map((item) => (
        <ProductItem item={item} />
      ))}
    </Grid>
  );
};
