/**
 * Created by guanyj on  2018/9/4
 */
import {Injectable} from "@angular/core";
import {User} from "../../model/user.model";
import {LocalStorageService} from "../local-storage/local-storage.service";

@Injectable()
export class AuthorityService {
    constructor(
        private $localStorageService: LocalStorageService,
    ) {}

    getCurrentUser(): User {
        return <User>this.$localStorageService.get('user');
    }

    setCurrentUser(user: User) {
        this.$localStorageService.set('user', user);
    }
}
