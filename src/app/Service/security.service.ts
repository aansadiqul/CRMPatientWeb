import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpHelper } from '../Common/helper/httpHelper';

@Injectable({
    providedIn: 'root'
})
export class SecurityService {

    constructor(private httpHelper: HttpHelper
    ) { }

    login(obj: any): Observable<any> {
        const url = 'api/security/login';
        return this.httpHelper.postHelper(url, obj);
    }



}