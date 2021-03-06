const { HeliconSubscribeClient } = require("@radicalbit/helicon-node-sdk");

const host = "<host>";
const port = 443;
const clientId = "<client-id>";
const clientSecret = "<client-secret>";
const tenant = "<tenant-name>";

const heliconSubscribeClient = new HeliconSubscribeClient(host, clientId, clientSecret, tenant, port);

heliconSubscribeClient.subscribe("<streamName>").onData(
  (data) => console.log(data)
);
