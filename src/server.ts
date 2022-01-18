import fastify, { FastifyInstance } from 'fastify';
import fastifyBlipp from 'fastify-blipp';
import { Server, IncomingMessage, ServerResponse } from 'http';
import statusRoutes from './routes';

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> =
	fastify();

server.register(fastifyBlipp);
server.register(statusRoutes);

export default server;
