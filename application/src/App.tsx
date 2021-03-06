import React, { useState } from "react";
import "./App.css";
import { client, clientMessage, options } from "./grpc/client";
import { Button, Box, Paper, Alert, IconButton } from "@mui/material";
import OptionsContainer from "./OptionsContainer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(4);
  const [hasError, setHasError] = useState(false);

  const onClick = () => {
    clientMessage.setLength(passwordLength);

    clientMessage.setOptions(options);

    client.generatePassword(clientMessage, undefined, (err, response) => {
      if (err) {
        setPassword("");
        setHasError(true);
        setTimeout(() => setHasError(false), 2000);
      }
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
          <Collapse in={hasError}>
            <Alert
              variant="filled"
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setHasError(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              Error - Please try again
            </Alert>
          </Collapse>
          <OptionsContainer handleSizeChange={handlePasswordSizeChange} />
          <Button variant="contained" onClick={onClick}>
            generate password
          </Button>
          <Collapse in={password ? true : false}>
            <h2>
              Password:{" "}
              <span style={{ color: theme.palette.text.secondary }}>
                {password}
              </span>
            </h2>
          </Collapse>
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
