"use strict";
// import fastify from 'fastify';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const db_1 = require("./db");
const server_1 = __importDefault(require("./server"));
(0, db_1.setupDB)('server').then(async () => {
    try {
        await server_1.default.listen(constants_1.PORT, '0.0.0.0');
        server_1.default.blipp();
        // console.log(`server listening on http://localhost:${PORT}`);
        console.log(`server listening on ${server_1.default.server.address().port}`);
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
// start();
//# sourceMappingURL=index.js.map