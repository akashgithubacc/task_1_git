import React, { useState } from "react";
import { Paper, TextField, Button, Typography } from "@mui/material";
import { passingToBackend } from "../../api";
import DropBox from "../DropBox";
import "./styles.css";

const Input = () => {
  const [value, setValue] = useState("");
  const [submitted, setsubmitted] = useState(false);
  const [display, setdisplay] = useState({
    show: false,
    similarity: null,
    commonNgrams: [],
    string1: "",
    string2: "",
  });

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
    setdisplay((prevDisplay) => {
      return {
        ...prevDisplay,
        show: false,
      };
    });
  };

  const handleClick = () => {
    setsubmitted(true);
    passingToBackend(value)
      .then((response) => {
        const { similarity, commonNgrams, String1, String2 } = response.data;
        setdisplay((...prevDisplay) => {
          return {
            ...prevDisplay,
            show: true,
            similarity: similarity,
            commonNgrams: commonNgrams,
            string1: String1,
            string2: String2,
          };
        });
        console.log(display.show);
        //setdisplay(true);
      })
      .catch((error) => {
        console.error(error);
      });

    setValue("Working on it");
    setTimeout(() => {
      setsubmitted(false);
      setValue("");
    }, 2000);
  };

  return (
    <Paper elevation={3} height="100vh" style={{ padding: "100px" }}>
      <Typography variant="h3" marginBottom={5}>
        Hello, There
      </Typography>
      <div>
        <TextField
          multiline
          rows={5}
          style={{ width: "500px", paddingBottom: "20px" }}
          name="input"
          label="Enter Your Statement"
          value={value}
          onChange={handleChange}
        />
      </div>
      <div>
        <Button
          className={`submitButton ${submitted ? "success" : ""}`}
          onClick={handleClick}
          variant="contained"
        >
          {value === ""
            ? "Type Something"
            : submitted
            ? "Successfully Submitted"
            : "Want to Submit ?"}
        </Button>
      </div>
      <div style={{ padding: "25px", width: "800px" }}>
        {display.show === true && (
          <DropBox
            similarity={display.similarity}
            commonNgrams={display.commonNgrams}
            String1={display.string1}
            String2={display.string2}
            variant="outlined"
          />
        )}
      </div>
    </Paper>
  );
};

export default Input;
