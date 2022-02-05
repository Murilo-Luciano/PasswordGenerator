// package: 
// file: src/proto/password.proto

import * as jspb from "google-protobuf";

export class Options extends jspb.Message {
  getHasNumber(): boolean;
  setHasNumber(value: boolean): void;

  getHasUppercase(): boolean;
  setHasUppercase(value: boolean): void;

  getHasLowercase(): boolean;
  setHasLowercase(value: boolean): void;

  getHasSymbols(): boolean;
  setHasSymbols(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Options.AsObject;
  static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Options;
  static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
}

export namespace Options {
  export type AsObject = {
    hasNumber: boolean,
    hasUppercase: boolean,
    hasLowercase: boolean,
    hasSymbols: boolean,
  }
}

export class GenPasswordRequest extends jspb.Message {
  getLength(): number;
  setLength(value: number): void;

  hasOptions(): boolean;
  clearOptions(): void;
  getOptions(): Options | undefined;
  setOptions(value?: Options): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenPasswordRequest): GenPasswordRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenPasswordRequest;
  static deserializeBinaryFromReader(message: GenPasswordRequest, reader: jspb.BinaryReader): GenPasswordRequest;
}

export namespace GenPasswordRequest {
  export type AsObject = {
    length: number,
    options?: Options.AsObject,
  }
}

export class GenPasswordResponse extends jspb.Message {
  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenPasswordResponse): GenPasswordResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenPasswordResponse;
  static deserializeBinaryFromReader(message: GenPasswordResponse, reader: jspb.BinaryReader): GenPasswordResponse;
}

export namespace GenPasswordResponse {
  export type AsObject = {
    password: string,
  }
}

