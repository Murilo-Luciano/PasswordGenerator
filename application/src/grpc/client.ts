import { PasswordGeneratorClient } from "./proto/password_grpc_web_pb";
import { GenPasswordRequest, Options } from "./proto/password_pb";

export const client = new PasswordGeneratorClient(
  process.env.REACT_APP_SERVICE_URL!
);

export const clientMessage = new GenPasswordRequest();

export const options = new Options();
