// GENERATED CODE -- DO NOT EDIT!

// package: 
// file: proto/password.proto

import * as proto_password_pb from "../proto/password_pb";
import * as grpc from "@grpc/grpc-js";

interface IPasswordGeneratorService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  generatePassword: grpc.MethodDefinition<proto_password_pb.GenPasswordRequest, proto_password_pb.GenPasswordResponse>;
}

export const PasswordGeneratorService: IPasswordGeneratorService;

export interface IPasswordGeneratorServer extends grpc.UntypedServiceImplementation {
  generatePassword: grpc.handleUnaryCall<proto_password_pb.GenPasswordRequest, proto_password_pb.GenPasswordResponse>;
}

export class PasswordGeneratorClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  generatePassword(argument: proto_password_pb.GenPasswordRequest, callback: grpc.requestCallback<proto_password_pb.GenPasswordResponse>): grpc.ClientUnaryCall;
  generatePassword(argument: proto_password_pb.GenPasswordRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_password_pb.GenPasswordResponse>): grpc.ClientUnaryCall;
  generatePassword(argument: proto_password_pb.GenPasswordRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_password_pb.GenPasswordResponse>): grpc.ClientUnaryCall;
}
