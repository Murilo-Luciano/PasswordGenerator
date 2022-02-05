protoc -I="./" ./proto/password.proto --plugin=protoc-gen-grpc-web="$(yarn bin)/protoc-gen-grpc-web" --js_out=import_style=commonjs:'./' --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:'./'

