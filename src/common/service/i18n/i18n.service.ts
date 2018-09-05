/**
 * Created by guanyj on  2018/9/5
 */
import {I18N as custom_zh_CN} from '../../../assets/i18n/custom/en_US';
import {I18N as custom_en_US} from '../../../assets/i18n/custom/zh_CN';
import {Injectable} from "@angular/core";

@Injectable()
export class I18nService {
    public i18n: any;

    constructor(
        protected language: string = 'zh_CN',
    ) {
        if (this.language === 'zh_CN') {
            this.i18n = custom_zh_CN;
        } else {
            this.i18n = custom_en_US;
        }
    }
}
