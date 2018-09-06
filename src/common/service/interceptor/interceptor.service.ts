/**
 * Created by guanyj on  2018/9/6
 */
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Injectable} from "@angular/core";
import {SystemConfigService} from "../system-config/system-config.service";
import {SystemConfigKey} from "../../const/system-config-key";

@Injectable()
export class InterceptorService implements HttpInterceptor {

    constructor(
        private $systemConfigService: SystemConfigService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.$systemConfigService.getSystemConfigByKey(SystemConfigKey.authorization);

        const authReq = req.clone({
            setHeaders: {
                'Authorization': token,
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'X-Requested-With': 'XMLHttpRequest'
            }
        });

        return next.handle(authReq)['map'](event => {
            return event;
        });
    }

}
