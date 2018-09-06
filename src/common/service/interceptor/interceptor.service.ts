/**
 * Created by guanyj on  2018/9/6
 */
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Injectable} from "@angular/core";
import {SystemConfigService} from "../system-config/system-config.service";
import {SystemConfigKey} from "../../const/system-config-key";
import {NzNotificationService} from "ng-zorro-antd";
import {CommonI18nService} from "../common-i18n/common-i18n.service";

@Injectable()
export class InterceptorService implements HttpInterceptor {
    private i18n: any;
    constructor(
        private $systemConfigService: SystemConfigService,
        private $notifyService: NzNotificationService,
        private $commonI18nService: CommonI18nService
    ) {
        this.i18n = $commonI18nService.i18n.common;
    }

    /**
     * 请求/响应拦截器
     * @param {HttpRequest<any>} req
     * @param {HttpHandler} next
     * @returns {Observable<HttpEvent<any>>}
     */
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

        return next.handle(authReq)['map']((event: any) => {
            if (event instanceof HttpResponse) {
                if (event.status === 200) {
                    const body = event.body;
                    if (!body.success) {
                        this.$notifyService.error(this.i18n.common.httpErrorTitle, body.errorMsg);
                    }
                } else if (event.status === 401) {
                    // 跳转到登录页面
                }
            }
            return event;
        });
    }

}
