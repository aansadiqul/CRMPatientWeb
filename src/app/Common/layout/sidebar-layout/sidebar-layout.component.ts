import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-sidebar-layout',
	templateUrl: './sidebar-layout.component.html',
	styleUrls: ['./sidebar-layout.component.css']
})
export class SidebarLayoutComponent implements OnInit {

	isPatientMenu: boolean = false;
	isAideMenu: boolean = false;

	constructor(
		private router: Router,
	) {
		router.events.subscribe(r => {
			if (router.url?.includes('patient')) {
				this.isPatientMenu = true;
			}
			if (router.url?.includes('aide')) {
				this.isPatientMenu = true;
			}
		});
	}

	ngOnInit() {

	}

}
