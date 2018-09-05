/**
 * Created by guanyj on  2018/9/5
 */
import {I18nService} from "../i18n/i18n.service";

export class CommonI18nService extends I18nService {
    constructor(
        protected language: string = 'zh_CN'
    ) {
        super(language);
    }
}
