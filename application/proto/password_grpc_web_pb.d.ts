import * as grpcWeb from 'grpc-web';

import * as proto_password_pb from '../proto/password_pb';


export class PasswordGeneratorClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  generatePassword(
    request: proto_password_pb.GenPasswordRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_password_pb.GenPasswordResponse) => void
  ): grpcWeb.ClientReadableStream<proto_password_pb.GenPasswordResponse>;

}

export class PasswordGeneratorPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  generatePassword(
    request: proto_password_pb.GenPasswordRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_password_pb.GenPasswordResponse>;

}

