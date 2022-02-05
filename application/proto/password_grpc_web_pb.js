/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./password_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.PasswordGeneratorClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.PasswordGeneratorPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GenPasswordRequest,
 *   !proto.GenPasswordResponse>}
 */
const methodDescriptor_PasswordGenerator_GeneratePassword = new grpc.web.MethodDescriptor(
  '/PasswordGenerator/GeneratePassword',
  grpc.web.MethodType.UNARY,
  proto.GenPasswordRequest,
  proto.GenPasswordResponse,
  /**
   * @param {!proto.GenPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GenPasswordResponse.deserializeBinary
);


/**
 * @param {!proto.GenPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.GenPasswordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GenPasswordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PasswordGeneratorClient.prototype.generatePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PasswordGenerator/GeneratePassword',
      request,
      metadata || {},
      methodDescriptor_PasswordGenerator_GeneratePassword,
      callback);
};


/**
 * @param {!proto.GenPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GenPasswordResponse>}
 *     Promise that resolves to the response
 */
proto.PasswordGeneratorPromiseClient.prototype.generatePassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PasswordGenerator/GeneratePassword',
      request,
      metadata || {},
      methodDescriptor_PasswordGenerator_GeneratePassword);
};


module.exports = proto;

