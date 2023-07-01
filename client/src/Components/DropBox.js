import React from "react";
import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  yellowPaper: {
    padding: theme.spacing(3),
    backgroundColor: "#FFF176",
    // Add any other styles you want
  },
}));

const DropBox = ({ similarity, commonNgrams, String1, String2 }) => {
  const classes = useStyles();
  return (
    <Paper elevation={5} style={{ padding: "10px" }}>
      <Typography variant="h4" gutterBottom>
        The 2 Sentences given were:
      </Typography>
      <Typography variant="h5" gutterBottom>
        {String1}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {String2}
      </Typography>
      <Typography variant="h6" gutterBottom>
        After Comparing the Bigrams for these 2 Strings, we found:
      </Typography>
      <Typography variant="h6" gutterBottom>
        Similarity: {similarity}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Common Bigrams:
        {commonNgrams.map((bigram, index) => (
          <span key={index}>{bigram} </span>
        ))}
      </Typography>
    </Paper>
  );
};

export default DropBox;
