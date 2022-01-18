"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const Coin_1 = require("./Coin");
let UserEntity = class UserEntity extends typeorm_1.BaseEntity {
    user_id;
    email;
    password;
    watchedCoins;
    constructor(values) {
        super();
        Object.assign(this, values);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserEntity.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        unique: true,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Coin_1.CoinEntity),
    (0, typeorm_1.JoinTable)({
        name: 'watchlists',
        joinColumn: {
            name: 'user_id',
        },
        inverseJoinColumn: {
            name: 'coin_id',
        },
    }),
    __metadata("design:type", Array)
], UserEntity.prototype, "watchedCoins", void 0);
UserEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'users' }),
    __metadata("design:paramtypes", [Object])
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=User.js.map