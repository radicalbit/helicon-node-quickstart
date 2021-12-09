const { HeliconSubscribeClient } = require("@radicalbit/helicon-node-sdk");

const grpcHost = "<grpc-host>";
const grpcPort = 0;
const clientId = "<client-id>";
const clientSecret = "<client-secret>";
const tenant = "<tenant-name>";

const heliconSubscribeClient = new HeliconSubscribeClient(grpcHost, grpcPort, clientId, clientSecret, tenant);

heliconSubscribeClient.subscribe("<streamName>").onData(
  (data) => console.log(data)
);
