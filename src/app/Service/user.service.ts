import { Injectable } from '@angular/core';
import { HttpHelper } from '../Common/helper/httpHelper';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(
		private httpHelper: HttpHelper
	) { }

	getAllUser() {
		const url = 'assets/json/user.json';
		return this.httpHelper.getHelper(url);
	}

}
