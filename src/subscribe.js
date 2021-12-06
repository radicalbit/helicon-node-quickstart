const { HeliconSubscribeClient } = require("@radicalbit/helicon-node-sdk");

const authorizationServerUrl = "<authorization-server-url>";
const grpcPort = 0;
const clientId = "<client-id>";
const clientSecret = "<client-secret>";
const tenant = "<tenant-name>";

const heliconSubscribeClient = new HeliconSubscribeClient(authorizationServerUrl, grpcPort, clientId, clientSecret, tenant);

heliconSubscribeClient.subscribe("<streamName>").onData(
  (data) => console.log(data)
);
