import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { PasswordGeneratorClient } from "./grpc/proto/password_grpc_web_pb";
import { GenPasswordRequest, Options } from "./grpc/proto/password_pb";

function App() {
  const [password, setPassword] = useState("");
  const client = new PasswordGeneratorClient(
    "http://" + window.location.hostname + ":8080"
  );

  const clientMessage = new GenPasswordRequest();

  const onClick = () => {
    clientMessage.setLength(10);

    const options = new Options();
    options.setHasLowercase(true);
    options.setHasNumber(true);
    options.setHasSymbols(true);
    options.setHasUppercase(true);

    clientMessage.setOptions(options);

    client.generatePassword(clientMessage, undefined, (err, response) => {
      if (err) console.error(err);
      console.log(response?.toObject());
      setPassword(response.getPassword());
    });
  };

  return (
    <div className="App">
      <button onClick={onClick}>GERAR SENHA</button>
      <h1>{password}</h1>
    </div>
  );
}

export default App;
