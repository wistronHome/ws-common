/**
 * Created by guanyj on  2018/9/6
 * description 此服务用于用户角色权限控制
 */
import {Injectable} from "@angular/core";
import {SystemConfigService} from "../system-config/system-config.service";
import * as lodash from 'lodash';
import {StorageKey} from "../../const/storage-key";
import {SystemConfigKey} from "../../const/system-config-key";

@Injectable()
export class PermissionService {
    /**
     * 该用户拥有的权限列表
     */
    private permissionCodes: number[];

    constructor(
        private $systemConfigService: SystemConfigService
    ) {
        const permissions = this.$systemConfigService.getSystemConfigByKey(
            `${StorageKey.prefix}${StorageKey.separator}${SystemConfigKey.permissions}`
        );
        this.permissionCodes = lodash.isEmpty(permissions) ? [] : permissions;
    }

    /**
     * 返回用户是否拥有此此code对应功能的权限
     * param {number} permissionCode
     * returns {any}
     */
    hasPermission(permissionCode: number) {
        return this.permissionCodes.includes(permissionCode);
    }
}

