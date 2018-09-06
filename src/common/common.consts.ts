/**
 * Created by guanyj on  2018/9/4
 */

import {Injector} from "@angular/core";

export let COMMON_INJECTOR: Injector;

export function InitCommonInjector(injector: Injector) {
    COMMON_INJECTOR = injector;
}
