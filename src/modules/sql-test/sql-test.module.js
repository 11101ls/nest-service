"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SqlTestModule = void 0;
var common_1 = require("@nestjs/common");
var sql_test_service_1 = require("./sql-test.service");
var sql_test_controller_1 = require("./sql-test.controller");
// 关联实体
var sql_test_entity_1 = require("./entities/sql-test.entity");
var typeorm_1 = require("@nestjs/typeorm");
var SqlTestModule = /** @class */ (function () {
    function SqlTestModule() {
    }
    SqlTestModule = __decorate([
        (0, common_1.Module)({
            // 关联实体 创建表
            imports: [typeorm_1.TypeOrmModule.forFeature([sql_test_entity_1.SqlTest])],
            controllers: [sql_test_controller_1.SqlTestController],
            providers: [sql_test_service_1.SqlTestService]
        })
    ], SqlTestModule);
    return SqlTestModule;
}());
exports.SqlTestModule = SqlTestModule;
