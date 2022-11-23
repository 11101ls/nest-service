"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.SqlTestController = void 0;
var common_1 = require("@nestjs/common");
// @Controller()
var SqlTestController = /** @class */ (function () {
    function SqlTestController(sqlTestService) {
        this.sqlTestService = sqlTestService;
    }
    SqlTestController.prototype.create = function (createSqlTestDto) {
        console.log('-----2222');
        return this.sqlTestService.create(createSqlTestDto);
    };
    SqlTestController.prototype.findAll = function () {
        return this.sqlTestService.findAll();
    };
    SqlTestController.prototype.findOne = function (id) {
        return this.sqlTestService.findOne(+id);
    };
    SqlTestController.prototype.update = function (id, updateSqlTestDto) {
        return this.sqlTestService.update(+id, updateSqlTestDto);
    };
    SqlTestController.prototype.remove = function (id) {
        return this.sqlTestService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], SqlTestController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], SqlTestController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], SqlTestController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], SqlTestController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], SqlTestController.prototype, "remove");
    SqlTestController = __decorate([
        (0, common_1.Controller)({
            path: 'sql-test',
            version: '1'
        })
    ], SqlTestController);
    return SqlTestController;
}());
exports.SqlTestController = SqlTestController;
