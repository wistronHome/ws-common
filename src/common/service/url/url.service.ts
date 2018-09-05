/**
 * Created by guanyj on  2018/9/5
 */
import {Injectable} from "@angular/core";

/**
 * 此服务需要在引用工程中提供实例。
 */
@Injectable()
export class UrlService {

    constructor(
        private httpHeadUrl: string = '',
        private wsHttpUrl: string = ''
    ) {
        if (httpHeadUrl.endsWith('/')) {
            this.httpHeadUrl = httpHeadUrl.substring(0, httpHeadUrl.length - 1);
        }
    }

    /**
     * 返回带ip+port的url
     * param {string} url
     * returns {string}
     */
    getHttpUrl(url: string): string {
        if (!url.startsWith('/')) {
            url = `/${url}`;
        }
        return this.httpHeadUrl + url;
    }

}
