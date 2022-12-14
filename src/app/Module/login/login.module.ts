import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared.module';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { environment } from 'src/environments/environment';

export function MSALInstanceFactory(): IPublicClientApplication {
    return new PublicClientApplication({
        auth: {
            clientId: 'fad3442a-5e52-477e-98b1-d11edc7c854d',
            // clientId: 'fad3442a-5e52-477e-98b1-d11edc7c854d',
            //fad3442a-5e52-477e-98b1-d11edc7c854d
            // fad3442a-5e52-477e-98b1-d11edc7c854d
            //redirectUri: 'http://localhost:4200/login',
            //2af954dc-ba13-4445-8b4c-8f15a39d6b1e
            // redirectUri: 'https://portal.passioncare.com/login'
            redirectUri: environment.BASE_URL + '/login'
        }
    });
}

const route: Routes = [
	{ path: '', component: LoginComponent }
]

@NgModule({
	imports: [
		CommonModule,
		SharedModule.forRoot(),
		RouterModule.forChild(route),
		MsalModule
	],
	providers: [
        {
            provide: MSAL_INSTANCE,
            useFactory: MSALInstanceFactory
        },
        MsalService
    ],
	declarations: [LoginComponent]
})
export class LoginModule { }
