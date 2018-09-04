/**
 * Created by guanyj on  2018/9/4
 */
import {Injectable} from "@angular/core";
import {StorageSeparator} from '../../common.consts';

@Injectable()
export class LocalStorageService {
    private prefix: string = 'ws';
    private separator: string = StorageSeparator;
    constructor() {}

    get(key: string): any {
        return JSON.parse(localStorage.getItem(`${this.prefix}${this.separator}${key}`));
    }

    set(key: string, value: any): void {
        localStorage.setItem(`${this.prefix}${this.separator}${key}`, typeof value === 'string' ? value : JSON.stringify(value));
    }
}
