import { AddressInfo } from 'net';

import { PORT } from './constants';
import { setupDB } from './db';

import server from './server';

setupDB('server').then(async () => {
	try {
		await server.listen(PORT, '0.0.0.0');
		server.blipp();
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
