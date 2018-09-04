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
        AuthorityGuardService
    ]
})

export class WsCommonModule { }
