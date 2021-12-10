const { HeliconWriteClient } = require("@radicalbit/helicon-node-sdk");

const host = "<host>";
const port = 443;
const clientId = "<client-id>";
const clientSecret = "<client-secret>";
const tenant = "<tenant-name>";
const protocol = "<http-protocol>";

const payload = {
	"name": "record",
	"temperature": 29
};

const heliconWriteClient = new HeliconWriteClient(host, clientId, clientSecret, tenant, port, protocol);

heliconWriteClient.write("<streamName>", payload).then(
	() => console.log("payload published!"),
	(errorMessage) => console.error(errorMessage)
);
