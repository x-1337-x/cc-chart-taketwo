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
exports.VoteEntity = void 0;
const typeorm_1 = require("typeorm");
const Coin_1 = require("./Coin");
const User_1 = require("./User");
let VoteEntity = class VoteEntity extends typeorm_1.BaseEntity {
    date;
    user_id;
    coin_id;
    constructor(values) {
        super();
        Object.assign(this, values);
    }
};
__decorate([
    (0, typeorm_1.Column)({ primary: true, type: 'date' }),
    __metadata("design:type", String)
], VoteEntity.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ primary: true }),
    (0, typeorm_1.ManyToOne)(() => User_1.UserEntity, {
        cascade: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id', referencedColumnName: 'user_id' }),
    __metadata("design:type", User_1.UserEntity)
], VoteEntity.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ primary: true }),
    (0, typeorm_1.ManyToOne)(() => Coin_1.CoinEntity, {
        cascade: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'coin_id', referencedColumnName: 'coin_id' }),
    __metadata("design:type", Coin_1.CoinEntity)
], VoteEntity.prototype, "coin_id", void 0);
VoteEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'votes' }),
    __metadata("design:paramtypes", [Object])
], VoteEntity);
exports.VoteEntity = VoteEntity;
//# sourceMappingURL=Vote.js.map