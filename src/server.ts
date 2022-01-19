import fastify, { FastifyInstance } from 'fastify';
import fastifyBlipp from 'fastify-blipp';
import fastifyFormbody from 'fastify-formbody';
// import fastifyMultipart from 'fastify-multipart';
import { Server, IncomingMessage, ServerResponse } from 'http';
import statusRoutes from './routes';
import { auth } from './routes/auth';

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> =
	fastify();

server.register(fastifyBlipp);
server.register(fastifyFormbody);
// server.register(fastifyMultipart);

server.register(statusRoutes);
server.register(auth);

export default server;
