"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getDB_1 = require("./getDB");
exports.default = async (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers.token;
    if (!token)
        return res.status(403).end();
    try {
        const decoded = (await jsonwebtoken_1.default.verify(token, req.app.get('secret')));
        const [user] = await (0, getDB_1.getDB)(req.app).query('select * from users where user_id = $1', [decoded.user_id]);
        if (!user) {
            return res.status(403).end();
        }
        res.locals.user_id = decoded.user_id;
        next();
    }
    catch (err) {
        console.log(err);
        return res.status(403).json({ err: err.message });
    }
};
//# sourceMappingURL=checkAuth.js.map