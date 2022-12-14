import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, timeout } from 'rxjs/operators';
import { finalize } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { MessageHelperService } from './message-helper.service';
import { LocalstoreService } from 'src/app/Common/service/localstore.service';

@Injectable({ providedIn: "root" })
export class HttpHelper {
	static numberOfRequest = 0;
	private timeOutTime = 1000000;
	constructor(
		private httpClient: HttpClient,
		private messageHelper: MessageHelperService,
		private router: Router,
		private localStoreService: LocalstoreService
	) { }

	postHelper(url: string, obj: any = {}, currentPage: number = 0, pageSize: number = 20,): Observable<any> {
		HttpHelper.numberOfRequest++;
		let payload = {
			RequestObj: obj,
			PageRecordSize: pageSize,
			PageNumber: currentPage,
			UserId: 0
		}
		return this.httpClient.post(url, payload)
			.pipe(timeout(this.timeOutTime))
			.pipe(map((value: any) => value,
				(error: HttpErrorResponse) => {
					this.handleError(error);
				})).pipe(catchError(this.handleError.bind(this)))
			.pipe(finalize(() => {
				HttpHelper.numberOfRequest--;
			}));
	}

	getHelper(url: string): Observable<any> {
		HttpHelper.numberOfRequest++;
		return this.httpClient.get(url)
			.pipe(timeout(this.timeOutTime))
			.pipe(map((value: any) => {
				return value;
			}, (error: HttpErrorResponse) => {
				this.handleError(error);
			})).pipe(catchError(this.handleError.bind(this)))
			.pipe(finalize(() => {
				HttpHelper.numberOfRequest--;
			}));
	}

	private handleError(error: HttpErrorResponse) {
		let errMsg = (error.message) ? error.message :
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		// if (HttpHelper.numberOfRequest == 1) {
		// 	if (error.status == 401) {
		// 		this.messageHelper.showMessage(1000, "Session Timeout. Please Log in Again");
		// 		this.localStoreService.removeToken();
		// 		this.router.navigate(['/login']);
		// 	} else if (error.message == 'Timeout has occurred') {
		// 		this.messageHelper.showMessage(1000, "response time out");
		// 	} else {
		// 		this.messageHelper.showMessage(1000, "error connection");
		// 	}
		// }
		return throwError(() => {
			new Error(error.error);
		});
	}
}
