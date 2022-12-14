import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { ResponseStatus } from 'src/app/Common/enums/appEnums';
import { MessageHelperService } from 'src/app/Common/helper/message-helper.service';
import { LocalstoreService } from 'src/app/Common/service/localstore.service';
import { SecurityService } from 'src/app/Service/security.service';
import { VMLogin } from 'src/app/VM/vmLogin';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	isShowPassword: boolean = false;
	microsoftLogin: boolean = true;
	organization: number = 0;

	constructor(
		private ssoService: MsalService,
		private securityService: SecurityService,
		private messageHelperService: MessageHelperService,
		private router: Router,
		private localStroreService: LocalstoreService
	) { }

	ngOnInit() {
	}

	clickNormalLogin() {
		this.microsoftLogin = false;
	}

	clickSSOLogin() {
		this.microsoftLogin = true;
	}

	ssoLogin() {
		this.ssoService.loginPopup().subscribe((response: AuthenticationResult) => {
			this.ssoService.instance.setActiveAccount(response.account);
			if (response != null) {
				var loginFrom = new VMLogin();
				loginFrom.UserName = response.uniqueId;
				loginFrom.Password = '';
				loginFrom.organization = this.organization;
				loginFrom.SSOAccessToken = response.accessToken;
				this.securityService.login(loginFrom).subscribe((response) => {
					if (response.responseCode === ResponseStatus.success) {

						console.log(response.responseObj);
						if (response.responseObj.newSsoUser) {
							this.localStroreService.setData('UserId', response.responseObj.user.userId);
							// localStorage.setItem("UserId", response.responseObj.user.userId);

							this.router.navigateByUrl('welcome');
						} else if (response.responseObj.user.userTypeName == 'SSO') {
							this.localStroreService.setData('UserId', response.responseObj.user.userId);
							// localStorage.setItem("UserId", response.responseObj.user.userId);
							this.localStroreService.setData('Token', response.responseObj.token);
							// localStorage.setItem("Token", response.responseObj.token);
							this.localStroreService.setData('User', response.responseObj.user);
							// localStorage.setItem("User", JSON.stringify(response.responseObj.user));
							this.localStroreService.setData('lstPermission', response.responseObj.user.lstAccessApi);
							// localStorage.setItem("lstPermission", JSON.stringify(response.responseObj.user.lstAccessApi));
							this.localStroreService.setData('lstAction', response.responseObj.user.lstPermissionAction);
							// localStorage.setItem("lstAction", JSON.stringify(response.responseObj.user.lstPermissionAction));

							var dashboardApi = response.responseObj.user.lstAccessApi.filter((a: any) => a.url == 'dashboard')[0];
							var accessApi = response.responseObj.user.lstAccessApi[0];
							if (!dashboardApi && accessApi) {
								this.router.navigateByUrl(accessApi.url);
							}
							else {
								this.router.navigateByUrl('dashboard');
							}

						} else {
							this.localStroreService.setData('UserId', response.responseObj.user.userId);
							// localStorage.setItem("UserId", response.responseObj.user.userId);
							this.localStroreService.setData('Token', response.responseObj.token);
							// localStorage.setItem("Token", response.responseObj.token);
							this.localStroreService.setData('User', response.responseObj.user);
							// localStorage.setItem("User", JSON.stringify(response.responseObj.user));
							this.localStroreService.setData('lstPermission', response.responseObj.user.lstAccessApi);
							// localStorage.setItem("lstPermission", JSON.stringify(response.responseObj.user.lstAccessApi));
							this.localStroreService.setData('lstAction', response.responseObj.user.lstPermissionAction);
							// localStorage.setItem("lstAction", JSON.stringify(response.responseObj.user.lstPermissionAction));

							this.messageHelperService.showMessage(ResponseStatus.success, "Login Successfully!");

							var dashboardApi = response.responseObj.user.lstAccessApi.filter((a: any) => a.url == 'dashboard')[0];
							var accessApi = response.responseObj.user.lstAccessApi[0];
							if (!dashboardApi && accessApi) {
								this.router.navigateByUrl(accessApi.url);
							}
							else {
								this.router.navigateByUrl('dashboard');
							}
						}

					} else {
						this.messageHelperService.showMessage(response.responseCode, response.message);
					}
				});
			}

		})
	}

}
