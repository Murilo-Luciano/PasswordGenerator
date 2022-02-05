import * as jspb from 'google-protobuf'



export class Options extends jspb.Message {
  getHasNumber(): boolean;
  setHasNumber(value: boolean): Options;

  getHasUppercase(): boolean;
  setHasUppercase(value: boolean): Options;

  getHasLowercase(): boolean;
  setHasLowercase(value: boolean): Options;

  getHasSymbols(): boolean;
  setHasSymbols(value: boolean): Options;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Options.AsObject;
  static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
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
  setLength(value: number): GenPasswordRequest;

  getOptions(): Options | undefined;
  setOptions(value?: Options): GenPasswordRequest;
  hasOptions(): boolean;
  clearOptions(): GenPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenPasswordRequest): GenPasswordRequest.AsObject;
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
  setPassword(value: string): GenPasswordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenPasswordResponse): GenPasswordResponse.AsObject;
  static serializeBinaryToWriter(message: GenPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenPasswordResponse;
  static deserializeBinaryFromReader(message: GenPasswordResponse, reader: jspb.BinaryReader): GenPasswordResponse;
}

export namespace GenPasswordResponse {
  export type AsObject = {
    password: string,
  }
}

