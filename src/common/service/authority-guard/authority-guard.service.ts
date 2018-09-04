/**
 * Created by guanyj on  2018/9/4
 */
import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/index";
import {WhitelistRoutes} from "../../const/whitelist-routes";
import {AuthorityService} from "../authority/authority.service";

@Injectable()
export class AuthorityGuardService implements CanActivate {

    constructor(
        private $authorityService: AuthorityService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const pathName = window.location.pathname;

        // 当前访问的路由为 login 等白名单路由
        if (this.isUrlInWhitelist(pathName)) {
            if (this.$authorityService.getCurrentUser()) {
                window.location.href = '/';
            }
            return true;
        }

        // 访问非白名单，且用户未登陆，跳转到登陆页面
        if (!this.$authorityService.getCurrentUser()) {
            window.location.href = WhitelistRoutes.login;
            return false;
        }
        return true;
    }


    private isUrlInWhitelist(url: string): boolean {
        return Object.values(WhitelistRoutes).includes(url);
    }
}
