/**
 * Created by guanyj on  2018/9/4
 */

import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HelloComponent} from "./component/hello/hello.component";
import {CommonModule} from "@angular/common";
import {LocalStorageService} from "./service/local-storage/local-storage.service";
import {AuthorityService} from "./service/authority/authority.service";
import {AuthorityGuardService} from "./service/authority-guard/authority-guard.service";
import {CommonI18nService} from "./service/common-i18n/common-i18n.service";
import {COMMON_INJECTOR} from "./common.consts";
import {SystemConfigService} from "./service/system-config/system-config.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        HelloComponent
    ],
    exports: [
        HelloComponent
    ],
    providers: [
        LocalStorageService,
        AuthorityService,
        AuthorityGuardService,
        {
            provide: CommonI18nService,
            useFactory() {
                const systemConfigService = COMMON_INJECTOR.get(SystemConfigService);
                const language = systemConfigService.getSystemConfigByKey('language');
                return new CommonI18nService(language);
            }
        }
    ]
})

export class WsCommonModule { }
