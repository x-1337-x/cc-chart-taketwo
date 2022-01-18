"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_SETTINGS = exports.PORT = exports.JWT_OPTIONS = void 0;
exports.JWT_OPTIONS = {
    expiresIn: '6h',
};
exports.PORT = 3000;
exports.DB_SETTINGS = {
    development: {
        type: 'postgres',
        port: 5432,
        username: 'nlxtikqohobtaw',
        password: 'bec1fc294b909b7ad781b154e6a30f308103fecc0faa305a0e6caa4ba119e991',
        database: 'dcgfiajid84r98',
        host: 'ec2-34-247-118-233.eu-west-1.compute.amazonaws.com',
        synchronize: true,
        dropSchema: false,
        logging: true,
        ssl: true,
        extra: {
            ssl: {
                rejectUnauthorized: false,
            },
        },
    },
    test: {
        type: 'postgres',
        port: 5432,
        username: 'sjffjihmzhgsse',
        password: '09c730c2d6321324499e4534aba4442ccb569958112a70d43c14d92c8eed5995',
        database: 'da2dk46aq6p2oi',
        host: 'ec2-54-195-141-170.eu-west-1.compute.amazonaws.com',
        synchronize: false,
        dropSchema: false,
        logging: false,
        ssl: true,
        extra: {
            ssl: {
                rejectUnauthorized: false,
            },
        },
    },
};
//# sourceMappingURL=constants.js.map