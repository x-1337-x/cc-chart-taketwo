// import fastify from 'fastify';

// const server = fastify();

// server.get('/ping', async (request, reply) => {
// 	return 'pong\n';
// });

// server.listen(8080, (err, address) => {
// 	if (err) {
// 		console.error(err);
// 		process.exit(1);
// 	}
// 	console.log(`Server listening at ${address}`);
// });

import { AddressInfo } from 'net';

import { PORT } from './constants';
import { setupDB } from './db';

import server from './server';

setupDB('server').then(async () => {
	try {
		await server.listen(PORT, '0.0.0.0');
		server.blipp();
		// console.log(`server listening on http://localhost:${PORT}`);
		console.log(
			`server listening on ${(server.server.address() as AddressInfo).port}`
		);
	} catch (err) {
		console.log(err);
		server.log.error(err);
		process.exit(1);
	}
});

process.on('uncaughtException', (error) => {
	console.error(error);
});
process.on('unhandledRejection', (error) => {
	console.error(error);
});

// start();
