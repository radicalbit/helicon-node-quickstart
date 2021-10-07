const { HeliconWriteClient } = require("@radicalbit/helicon-node-sdk");

const authorizationServerUrl = "<authorization-server-url>";
const grpcHost = "<grpc-host>";
const grpcPort = 0;
const clientId = "<client-id>";
const clientSecret = "<client-secret>";
const tenant = "<tenant-name>";

const payload = {
	"name": "record",
	"temperature": 29
};

const heliconWriteClient = new HeliconWriteClient(authorizationServerUrl, grpcHost, grpcPort, clientId, clientSecret, tenant);

heliconWriteClient.write("<streamName>", payload).then(
	() => console.log("payload published!"),
	(errorMessage) => console.error(errorMessage)
);
