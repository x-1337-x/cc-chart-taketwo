"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.auth = (0, fastify_plugin_1.default)(async (server, opts, next) => {
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
        handler: async (req, res) => {
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
                const hashedPassword = await bcrypt_1.default.hash(password, 10);
                await server.orm.query(`insert into users ("email", "password") values ($1, $2) returning user_id, email, password`, [email, hashedPassword]);
                res.status(200).send('OK');
                return;
            }
            catch (error) {
                return next(error);
            }
        },
    });
    // next();
});
//# sourceMappingURL=auth.js.map