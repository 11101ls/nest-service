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
exports.SpiderController = void 0;
var common_1 = require("@nestjs/common");
var SpiderController = /** @class */ (function () {
    function SpiderController(spiderService) {
        this.spiderService = spiderService;
    }
    SpiderController.prototype.create = function (createSpiderDto) { };
    SpiderController.prototype.findAll = function () {
        return this.spiderService.findAll();
    };
    SpiderController.prototype.findOne = function (id) { };
    SpiderController.prototype.update = function (id, updateSpiderDto) { };
    SpiderController.prototype.remove = function (id) { };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], SpiderController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], SpiderController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], SpiderController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], SpiderController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], SpiderController.prototype, "remove");
    SpiderController = __decorate([
        (0, common_1.Controller)('spider')
    ], SpiderController);
    return SpiderController;
}());
exports.SpiderController = SpiderController;
