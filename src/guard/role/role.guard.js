"use strict";
var __decorate = ( this && this.__decorate ) || function ( decorators, target, key, desc ) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor( target, key ) : desc, d;
    if ( typeof Reflect === "object" && typeof Reflect.decorate === "function" ) r = Reflect.decorate( decorators, target, key, desc );
    else for ( var i = decorators.length - 1; i >= 0; i-- ) if ( d = decorators[ i ] ) r = ( c < 3 ? d( r ) : c > 3 ? d( target, key, r ) : d( target, key ) ) || r;
    return c > 3 && r && Object.defineProperty( target, key, r ), r;
};
exports.__esModule = true;
exports.RoleGuard = void 0;
var common_1 = require( "@nestjs/common" );
var RoleGuard = /** @class */ ( function () {
    function RoleGuard ( Reflector ) {
        this.Reflector = Reflector;
    }
    RoleGuard.prototype.canActivate = function ( context ) {
        var admin = this.Reflector.get( 'role', context.getHandler() );
        var req = context.switchToHttp().getRequest();
        if ( admin === null || admin === void 0 ? void 0 : admin.includes( req.query.role ) ) {
            return true;
        }
        else {
            return false;
        }
    };
    RoleGuard = __decorate( [
        ( 0, common_1.Injectable )()
    ], RoleGuard );
    return RoleGuard;
}() );
exports.RoleGuard = RoleGuard;
