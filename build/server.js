"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify_blipp_1 = __importDefault(require("fastify-blipp"));
const routes_1 = __importDefault(require("./routes"));
const server = (0, fastify_1.default)();
server.register(fastify_blipp_1.default);
server.register(routes_1.default);
exports.default = server;
//# sourceMappingURL=server.js.map