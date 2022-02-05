// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var src_proto_password_pb = require('../../src/proto/password_pb.js');

function serialize_GenPasswordRequest(arg) {
  if (!(arg instanceof src_proto_password_pb.GenPasswordRequest)) {
    throw new Error('Expected argument of type GenPasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GenPasswordRequest(buffer_arg) {
  return src_proto_password_pb.GenPasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GenPasswordResponse(arg) {
  if (!(arg instanceof src_proto_password_pb.GenPasswordResponse)) {
    throw new Error('Expected argument of type GenPasswordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GenPasswordResponse(buffer_arg) {
  return src_proto_password_pb.GenPasswordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PasswordGeneratorService = exports.PasswordGeneratorService = {
  geneneratePassword: {
    path: '/PasswordGenerator/GeneneratePassword',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_password_pb.GenPasswordRequest,
    responseType: src_proto_password_pb.GenPasswordResponse,
    requestSerialize: serialize_GenPasswordRequest,
    requestDeserialize: deserialize_GenPasswordRequest,
    responseSerialize: serialize_GenPasswordResponse,
    responseDeserialize: deserialize_GenPasswordResponse,
  },
};

exports.PasswordGeneratorClient = grpc.makeGenericClientConstructor(PasswordGeneratorService);
