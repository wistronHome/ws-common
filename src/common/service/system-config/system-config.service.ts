/**
 * Created by guanyj on  2018/9/5
 */
import {Injectable} from "@angular/core";
import {StorageKey} from "../../const/storage-key";
import {StorageSeparator} from "../../common.consts";
import {NzI18nService, zh_CN, en_US} from "ng-zorro-antd";

@Injectable()
export class SystemConfigService {
    private systemKey: string = `${StorageKey.prefix}${StorageSeparator}${StorageKey.SystemConfig}`;
    constructor(
        private $nzI18nService: NzI18nService
    ) {}

    /**
     * 替换所有的系统配置缓存
     * 在设置语言环境时，设置ng-zorro的国际化
     * @param config
     */
    setSystemConfig(config: any) {
        try {
            config = JSON.stringify(config || {});
            if (config.language) {
                this.$nzI18nService.setLocale(config.language === 'en_US' ? en_US : zh_CN);
            }
            localStorage.setItem(this.systemKey, config);
        } catch (err) {
            console.error('systemConfig 格式不正确');
        }
    }

    /**
     * 获取所有系统配置缓存
     * @returns {any}
     */
    getSystemConfig(): any {
        try {
            return JSON.parse(localStorage.getItem(this.systemKey));
        } catch (err) {
            return {};
        }
    }

    /**
     * 更新指定的系统配置缓存
     * @param {string} key
     * @param config
     */
    setSystemConfigByKey(key: string, config: any) {
        const systemConfig = this.getSystemConfig() || {};
        systemConfig[key] = config;
        this.setSystemConfig(systemConfig);
    }

    /**
     * 获取指定的系统配置缓存
     * @param {string} key
     * @returns {any}
     */
    getSystemConfigByKey(key: string) {
        return this.getSystemConfig()[key];
    }
}
