/**
 * Created by guanyj on  2018/9/4
 */

import {Injector} from "@angular/core";

/** 缓存key字段分割符 */
export const StorageSeparator = '.';

export let COMMON_INJECTOR: Injector;

export function InitCommonInjector(injector: Injector) {
    COMMON_INJECTOR = injector;
}
