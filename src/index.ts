import { AddressInfo } from 'net';
import fastifyTypeorm from 'fastify-typeorm-plugin';
import { PORT } from './constants';
import { setupDB } from './db';

import server from './server';

setupDB('server').then(async (connection) => {
	try {
		// const connSchema = {
		// 	type: 'object',
		// 	properties: { ...connection },
		// };
		// const options = {
		// 	confKey: 'db',
		// 	schema: connSchema,
		// 	data: { ...connection },
		// };
		// server.register(fastifyEnv, options);
		server.register(fastifyTypeorm, { connection });
		await server.listen(PORT, '0.0.0.0');
		server.blipp();
		console.log(
			`server listening on http://localhost:${
				(server.server.address() as AddressInfo).port
			}`
		);
		// console.log(server);
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
