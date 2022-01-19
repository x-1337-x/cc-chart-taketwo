import { FastifyInstance, FastifyRequest } from 'fastify';
import fp, { PluginMetadata } from 'fastify-plugin';
import checkAuth from '../utils/checkAuth';
import { getDB } from '../utils/getDB';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import type { AuthTokenPayload } from '../types';
import { JWT_OPTIONS } from '../constants';
import { send } from 'process';

type RequestBody = {
	email: string;
	password: string;
	repeatPassword: string;
};

type Requset = FastifyRequest<{
	Body: RequestBody;
}>;

export const auth = fp(
	async (server: FastifyInstance, opts: PluginMetadata, next: Function) => {
		server.route({
			url: '/register',
			method: ['POST'],
			logLevel: 'warn',
			schema: {
				response: {
					'2xx': {
						type: 'object',
						properties: {
							token: { type: 'string' },
						},
					},
				},
			},
			handler: async (req: Requset, res) => {
				try {
					let { email, password, repeatPassword } = req.body;

					if (!email || !password || !repeatPassword) {
						res
							.status(400)
							.send('Email, password, repeatedPassword are required fields');
						return;
					}

					if (password !== repeatPassword) {
						res.status(400).send('Password does not match Repeat password');
						return;
					}

					const hashedPassword = await bcrypt.hash(password, 10);

					await server.orm.query(
						`insert into users ("email", "password") values ($1, $2) returning user_id, email, password`,
						[email, hashedPassword]
					);

					res.status(200).send('OK');
					return;
				} catch (error) {
					return next(error);
				}
			},
		});
		// next();
	}
);
