"use strict";
exports.__esModule = true;
exports.ReqUrl = exports.RoleD = void 0;
// 自定义装饰器SetMetadata
var common_1 = require("@nestjs/common");
var RoleD = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return (0, common_1.SetMetadata)('role-d', args);
};
exports.RoleD = RoleD;
exports.ReqUrl = (0, common_1.createParamDecorator)(function (data, ctx) {
    var req = ctx.switchToHttp().getRequest();
    console.log(data, 'data');
    return req.url;
});
