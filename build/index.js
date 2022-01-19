"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_typeorm_plugin_1 = __importDefault(require("fastify-typeorm-plugin"));
const constants_1 = require("./constants");
const db_1 = require("./db");
const server_1 = __importDefault(require("./server"));
(0, db_1.setupDB)('server').then(async (connection) => {
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
        server_1.default.register(fastify_typeorm_plugin_1.default, { connection });
        await server_1.default.listen(constants_1.PORT, '0.0.0.0');
        server_1.default.blipp();
        console.log(`server listening on http://localhost:${server_1.default.server.address().port}`);
        // console.log(server);
    }
    catch (err) {
        console.log(err);
        server_1.default.log.error(err);
        process.exit(1);
    }
});
process.on('uncaughtException', (error) => {
    console.error(error);
});
process.on('unhandledRejection', (error) => {
    console.error(error);
});
//# sourceMappingURL=index.js.map