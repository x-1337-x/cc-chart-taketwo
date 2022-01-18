"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupDB = void 0;
const typeorm_1 = require("typeorm");
const constants_1 = require("../constants");
const Coin_1 = require("./entities/Coin");
const User_1 = require("./entities/User");
const Vote_1 = require("./entities/Vote");
const entities = [User_1.UserEntity, Coin_1.CoinEntity, Vote_1.VoteEntity];
const setupDB = async (name = 'app') => {
    const env = (process.env.NODE_ENV || 'development');
    const connection = await (0, typeorm_1.createConnection)({
        name,
        entities,
        ...constants_1.DB_SETTINGS[env],
    });
    return connection;
};
exports.setupDB = setupDB;
//# sourceMappingURL=index.js.map