import { Connection } from 'typeorm';

export const getDB = (app: any): Connection => {
	return app.orm as Connection;
};
