"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
exports.default = (0, fastify_plugin_1.default)(async (server, opts, next) => {
    server.route({
        url: '/status',
        logLevel: 'warn',
        method: ['GET', 'HEAD'],
        handler: async (request, reply) => {
            return reply.send({ date: new Date(), works: true });
        },
    });
    next();
});
//# sourceMappingURL=index.js.map