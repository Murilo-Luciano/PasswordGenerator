// GENERATED CODE -- DO NOT EDIT!

// package: 
// file: src/proto/password.proto

import * as src_proto_password_pb from "../../src/proto/password_pb";
import * as grpc from "@grpc/grpc-js";

interface IPasswordGeneratorService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  geneneratePassword: grpc.MethodDefinition<src_proto_password_pb.GenPasswordRequest, src_proto_password_pb.GenPasswordResponse>;
}

export const PasswordGeneratorService: IPasswordGeneratorService;

export interface IPasswordGeneratorServer extends grpc.UntypedServiceImplementation {
  geneneratePassword: grpc.handleUnaryCall<src_proto_password_pb.GenPasswordRequest, src_proto_password_pb.GenPasswordResponse>;
}

export class PasswordGeneratorClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  geneneratePassword(argument: src_proto_password_pb.GenPasswordRequest, callback: grpc.requestCallback<src_proto_password_pb.GenPasswordResponse>): grpc.ClientUnaryCall;
  geneneratePassword(argument: src_proto_password_pb.GenPasswordRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<src_proto_password_pb.GenPasswordResponse>): grpc.ClientUnaryCall;
  geneneratePassword(argument: src_proto_password_pb.GenPasswordRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<src_proto_password_pb.GenPasswordResponse>): grpc.ClientUnaryCall;
}
