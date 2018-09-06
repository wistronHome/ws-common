/**
 * Created by guanyj on  2018/9/6
 */

import {AfterViewInit, Directive, ElementRef, Input} from "@angular/core";
import {PermissionService} from "../service/permission/permission.service";

@Directive({
    selector: '[wsPermission]'
})

export class PermissionDirective implements AfterViewInit {
    @Input() wsPermission: number | string;

    constructor(
        private el: ElementRef,
        private $permissionService: PermissionService
    ) {}

    ngAfterViewInit() {
        if (!this.$permissionService.hasPermission(Number(this.wsPermission))) {
            this.el.nativeElement.style.display = 'none';
        }
    }
}

