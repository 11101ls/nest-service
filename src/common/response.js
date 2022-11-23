"use strict";
// 全局响应拦截器
var __decorate = ( this && this.__decorate ) || function ( decorators, target, key, desc ) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor( target, key ) : desc, d;
    if ( typeof Reflect === "object" && typeof Reflect.decorate === "function" ) r = Reflect.decorate( decorators, target, key, desc );
    else for ( var i = decorators.length - 1; i >= 0; i-- ) if ( d = decorators[ i ] ) r = ( c < 3 ? d( r ) : c > 3 ? d( target, key, r ) : d( target, key ) ) || r;
    return c > 3 && r && Object.defineProperty( target, key, r ), r;
};
exports.__esModule = true;
exports.Response = void 0;
var common_1 = require( "@nestjs/common" );
var rxjs_1 = require( "rxjs" );
// 装饰
var Response = /** @class */ ( function () {
    function Response () {
    }
    Response.prototype.intercept = function ( context, next ) {
        return next.handle().pipe( ( 0, rxjs_1.map )( function ( data ) {
            return {
                data: data,
                status: 0,
                message: 'message',
                success: true
            };
        } ) );
    };
    Response = __decorate( [
        ( 0, common_1.Injectable )()
    ], Response );
    return Response;
}() );
exports.Response = Response;
