import jwt from 'jsonwebtoken';
import type { AuthTokenPayload } from '../types';
import { getDB } from './getDB';

export default async (req: any, res: any, next: Function) => {
	const token = req.body.token || req.query.token || req.headers.token;

	if (!token) return res.status(403).end();

	try {
		const decoded = (await jwt.verify(
			token,
			req.app.get('secret')
		)) as AuthTokenPayload;

		const [user] = await getDB(req.app).query(
			'select * from users where user_id = $1',
			[decoded.user_id]
		);

		if (!user) {
			return res.status(403).end();
		}

		res.locals.user_id = decoded.user_id;

		next();
	} catch (err: any) {
		console.log(err);

		return res.status(403).json({ err: err.message });
	}
};
