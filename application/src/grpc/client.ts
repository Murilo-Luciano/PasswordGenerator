import { PasswordGeneratorClient } from "./proto/password_grpc_web_pb";
import { GenPasswordRequest, Options } from "./proto/password_pb";

export const client = new PasswordGeneratorClient(
  "http://" + window.location.hostname + ":8080"
);

export const clientMessage = new GenPasswordRequest();

export const options = new Options();
