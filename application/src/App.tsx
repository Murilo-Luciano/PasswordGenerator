import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { PasswordGeneratorClient } from "./grpc/proto/password_grpc_web_pb";
import { GenPasswordRequest, Options } from "./grpc/proto/password_pb";
import { client, clientMessage, options } from "./grpc/client";
import { Button, createStyles, makeStyles, Paper } from "@mui/material";
import OptionsContainer from "./OptionsContainer";

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
    <div className="App">
      <Paper elevation={4} style={styles.paper}>
        <h2>Password: {password}</h2>
        <OptionsContainer handleSizeChange={handlePasswordSizeChange} />
        <Button onClick={onClick}>generate password</Button>
      </Paper>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  paper: {
    margin: 150,
  },
};

export default App;
