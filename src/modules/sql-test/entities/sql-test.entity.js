"use strict";
// 自动加载实体
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SqlTest = void 0;
var typeorm_1 = require("typeorm");
var DataList;
(function (DataList) {
    DataList[DataList["data1"] = 0] = "data1";
    DataList[DataList["data2"] = 1] = "data2";
    DataList[DataList["data3"] = 2] = "data3";
})(DataList || (DataList = {}));
// 装饰为实体类
var SqlTest = /** @class */ (function () {
    // 表名
    function SqlTest() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
    ], SqlTest.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({
            type: 'varbinary',
            length: 255
        })
    ], SqlTest.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)({
            select: true,
            comment: '注释',
            "default": '123',
            nullable: true
        })
    ], SqlTest.prototype, "password");
    __decorate([
        (0, typeorm_1.Generated)('uuid')
    ], SqlTest.prototype, "uuid");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            type: 'timestamp'
        })
    ], SqlTest.prototype, "createTime");
    __decorate([
        (0, typeorm_1.Column)({
            type: 'enum',
            "enum": DataList,
            "default": 1
        })
    ], SqlTest.prototype, "dataList");
    __decorate([
        (0, typeorm_1.Column)('simple-array')
    ], SqlTest.prototype, "names");
    __decorate([
        (0, typeorm_1.Column)('simple-json')
    ], SqlTest.prototype, "json");
    SqlTest = __decorate([
        (0, typeorm_1.Entity)()
        // 表名
    ], SqlTest);
    return SqlTest;
}());
exports.SqlTest = SqlTest;
