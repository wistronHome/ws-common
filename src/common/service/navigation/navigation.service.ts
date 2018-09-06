/**
 * Created by guanyj on  2018/9/6
 */
import {Injectable} from "@angular/core";

@Injectable()
export class NavigationService {

    constructor() {}

    /**
     * 不同系统之间的跳转，同一个系统之间的跳转，直接使用angular的路由服务
     * param {string} url
     * param {string} subSystemName
     * param queryParams
     */
    navigate(url: string, subSystemName: string, queryParams?: any) {
        if (queryParams) {
            url += '?';
            Object.keys(queryParams).forEach(key => {
                 url += `${key}=${queryParams[key]}&`;
            });
            url = url.substring(0, url.length - 1);
        }
        window.open(url, subSystemName);
    }
}
