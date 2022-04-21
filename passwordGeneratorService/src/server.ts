import {
  handleUnaryCall,
  sendUnaryData,
  Server,
  ServerCredentials,
  ServerUnaryCall,
  UntypedHandleCall,
} from "@grpc/grpc-js";
import { promisify } from "util";
import passwordGenerator from "./passwordGenerator";
import { PasswordGeneratorService } from "../proto/password_grpc_pb";
import { IPasswordGeneratorServer } from "../proto/password_grpc_pb";
import { GenPasswordRequest, GenPasswordResponse } from "../proto/password_pb";

class PasswordGeneratorServer implements IPasswordGeneratorServer {
  generatePassword(
    options: ServerUnaryCall<GenPasswordRequest, GenPasswordResponse>,
    callback: sendUnaryData<GenPasswordResponse>
  ) {
    console.log(
      options.request.getLength(),
      options.request.getOptions()?.toObject()
    );

    const password = passwordGenerator(
      options.request.getLength(),
      options.request.getOptions()?.toObject()
    );

    const response = new GenPasswordResponse();
    response.setPassword(password);
    return callback(null, response);
  }

  [name: string]: UntypedHandleCall;
}

const server = new Server();
server.addService(PasswordGeneratorService, new PasswordGeneratorServer());
const bindPromise = promisify(server.bindAsync).bind(server);

bindPromise("0.0.0.0:50051", ServerCredentials.createInsecure())
  .then((port) => {
    console.info(`Listening on ${port}`);
    server.start();
  })
  .catch(console.error);
