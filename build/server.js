"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify_blipp_1 = __importDefault(require("fastify-blipp"));
const fastify_formbody_1 = __importDefault(require("fastify-formbody"));
const routes_1 = __importDefault(require("./routes"));
const auth_1 = require("./routes/auth");
const server = (0, fastify_1.default)();
server.register(fastify_blipp_1.default);
server.register(fastify_formbody_1.default);
// server.register(fastifyMultipart);
server.register(routes_1.default);
server.register(auth_1.auth);
exports.default = server;
//# sourceMappingURL=server.js.map