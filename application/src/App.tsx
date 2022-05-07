import React, { useState } from "react";
import "./App.css";
import { client, clientMessage, options } from "./grpc/client";
import { Button, Box, Paper } from "@mui/material";
import OptionsContainer from "./OptionsContainer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "@mui/material/Card";

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(4);

  const onClick = () => {
    clientMessage.setLength(passwordLength);

    clientMessage.setOptions(options);

    client.generatePassword(clientMessage, undefined, (err, response) => {
      if (err) console.error(err);
      console.log(response?.toObject());
      setPassword(response.getPassword());
    });
  };

  const handlePasswordSizeChange = (event: Event, value: number | number[]) => {
    if (Array.isArray(value)) {
      throw "error";
    }
    setPasswordLength(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box style={styles.container}>
        <Paper elevation={12} style={styles.paper}>
          <OptionsContainer handleSizeChange={handlePasswordSizeChange} />
          <Button variant="contained" onClick={onClick}>
            generate password
          </Button>
          {password ? (
            <h2>
              Password:{" "}
              <span style={{ color: theme.palette.text.secondary }}>
                {password}
              </span>
            </h2>
          ) : null}
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#C3073F",
    },
    secondary: {
      main: "#C3073F",
    },
    background: {
      default: "#343438",
      paper: "#1A1A1D",
    },
    text: {
      primary: "#FFF",
      secondary: "#950740",
    },
  },
});

const styles: { [key: string]: React.CSSProperties } = {
  paper: {
    margin: 150,
    padding: 50,
    display: "flex",
    flexDirection: "column",
  },
  container: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: theme.palette.background.default,
  },
};

export default App;
