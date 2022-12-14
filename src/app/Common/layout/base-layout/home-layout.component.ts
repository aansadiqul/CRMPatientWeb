import { Component } from '@angular/core';

@Component({
	selector: 'app-home-layout',
	template: `
		<app-sidebar-layout></app-sidebar-layout>
		<app-header-layout></app-header-layout>
		<main>
			<ng-progress></ng-progress>
			<div class="main-content">
				<router-outlet></router-outlet>
			</div>
		</main>
	`
})
export class HomeLayoutComponent { }
