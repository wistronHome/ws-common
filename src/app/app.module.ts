import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WsCommonModule} from "../common/common.module";
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        WsCommonModule,
        NgZorroAntdModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
