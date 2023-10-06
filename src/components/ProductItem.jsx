import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

export const ProductItem = ({ item }) => {
  return (
    <Grid item xs={4} sx={{}}>
      <Card
        className="card"
        sx={{
          padding: 2,
          margin: 1,
          height: 500,
          boxShadow: "2px 5px 5px 2px ",
          bgcolor: "#34bbd9",
        }}
      >
        <CardContent>
          <div id="r" className="user">
            <strong>{item.id}. </strong> {item.name}
          </div>
          <div className="user">
            <strong>Username:</strong> {item.username}
          </div>
          <div className="user">
            <strong>Email:</strong> {item.email}
          </div>
          <div className="user">
            <strong>Address:</strong>{" "}
            {`${item.address.street}, ${item.address.suite}, ${item.address.city}`}
          </div>
          <div className="user">
            <strong>ZipCode:</strong> {item.address.zipcode}
          </div>
          <div className="user">
            <strong>Mobile No.:</strong> {item.phone}
          </div>
          <div className="user">
            <strong>Company Name Website:</strong> {item.website}
          </div>
          <div className="user">
            <strong>Company Name:</strong> {item.company.name}
          </div>
          <div className="user">
            <strong>Company's Catchphrase:</strong> {item.company.catchPhrase}
          </div>
          <div className="user">
            <strong>Company Business:</strong> {item.company.bs}
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};
