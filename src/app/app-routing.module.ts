import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './Common/layout/base-layout/home-layout.component';
import { LoginLayoutComponent } from './Common/layout/base-layout/login-layout.component';

const routes: Routes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{
		path: '',
		component: LoginLayoutComponent,
		children: [
			{ path: 'login', loadChildren: () => import('./Module/login/login.module').then(m => m.LoginModule) },
			{ path: 'register', loadChildren: () => import('./Module/register/register.module').then(m => m.RegisterModule) },
			{
				path: '',
				component: HomeLayoutComponent,
				children: [
					{ path: 'dashboard', loadChildren: () => import('./Module/dashboard/dashboard.module').then(m => m.DashboardModule) },
					{ path: 'patient', loadChildren: () => import('./Module/patient/patient.module').then(m => m.PatientModule) },
				]
			}
		]
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
