# Helicon Node Sample App
This repository contains the files required to run the Helicon Node Quickstart.

Helicon is a simple, scalable, robust, code-free and generic platform to enable and productise the next generation of "online modified", real-time event stream ML/AI models.

## Set up the project

Project can be setup with those simple steps:
1. locally download the repository
2. install the necessary dependencies with `npm install` (or any package manager you prefer, like `yarn` or `pnpm`).

## Sample App
### Publish

_publish_ operations can be performed by using the `HeliconWriteClient` class exported by the library.

To initialize a new `HeliconWriteClient` instance, the user is tasked to fill all the required parameters of the constructor such as:

 - The address where the GRPC Host is located
 - The port to which the GRPC Host is binded
 - The rest of the authentication parameters such as Client Secret, clientId and Tenant

Each of these parameters can be found (pre-filled) in the "Setup" section of a newly created stream.

After a `HeliconWriteClient` has been initialized, the user can send data to the stream thanks to the `write(streamName, payload)` method; An usage example is shown below: 

```javascript
const { HeliconWriteClient } = require("@radicalbit/helicon-node-sdk");

const grpcHost = "<grpc-host>";
const grpcPort = 0;
const clientId = "<client-id>";
const clientSecret = "<client-secret>";
const tenant = "<tenant-name>";

const payload = {
	"name": "record",
	"temperature": "29"
};

const heliconWriteClient = new HeliconWriteClient(grpcHost, grpcPort, clientId, clientSecret, tenant);

heliconWriteClient.write("<streamName>", payload).then(
	() => console.log("payload published!"),
	(errorMessage) => console.error(errorMessage)
);
```
### Subscribe

_subscribe_ operations can be performed by using the `HeliconSubscribeClient` class exported by the library.

To initialize a new `HeliconSubscribeClient` instance, the user is tasked to fill all the required parameters of the constructor such as:

 - The address where the GRPC Host is located
 - The port to which the GRPC Host is binded
 - The rest of the authentication parameters such as Client Secret, clientId and Tenant

Each of these parameters can be found (pre-filled) in the "Setup" section of a newly created stream.

After a `HeliconSubscribeClient` has been initialized, the user can receive the events from the stream thanks to the `subscribe(streamDisplaName)` method; An usage example is shown below: 

```javascript
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
```
## How to Run the app


If you want to run the app locally, you will need to:
1. fill the necessary authentication details in `publish.js` or `subscribe.js`.
2. Run the examples with `npm run start:publish` or `npm run start:subscribe` (you can use `yarn` or `pnpm` too)

## Change the API version

The main branch is always updated with the latest version of Helicon API.

If you need to use an old version of the Helicon's API, you can switch between the project version using `git checkout tag_version`.

You can refer to Helicon documentation for looking more in the depth over the version's features.


## Support
We're always happy to help with any other questions you might have! [Send us an email](mailto:support@radicalbit.io).
 
