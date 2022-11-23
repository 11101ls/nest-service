"use strict";
// 异常拦截器  异常报错信息
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HttpFilter = void 0;
var common_1 = require("@nestjs/common");
var HttpFilter = /** @class */ (function () {
    function HttpFilter() {
    }
    HttpFilter.prototype["catch"] = function (exception, host) {
        var ctx = host.switchToHttp();
        var request = ctx.getRequest();
        var response = ctx.getResponse();
        var status = exception.getStatus();
        response.status(status).json({
            success: false,
            time: new Date(),
            data: exception.message,
            status: status,
            path: request.url
        });
    };
    HttpFilter = __decorate([
        (0, common_1.Catch)(common_1.HttpException)
    ], HttpFilter);
    return HttpFilter;
}());
exports.HttpFilter = HttpFilter;
