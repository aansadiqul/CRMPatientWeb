import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
	selector: 'app-patient-details-sidebar',
	templateUrl: './patient-details-sidebar.component.html',
	styleUrls: ['./patient-details-sidebar.component.css']
})
export class PatientDetailsSidebarComponent implements OnInit {

	activateTabMenu: number = 1;
	isTaskDetailsShow: boolean = false;

	constructor() { }

	ngOnInit() {
	}

	clickTabMenu(tabMenu: number) {
		this.activateTabMenu = tabMenu;
		this.isTaskDetailsShow = false;
	}

	showTaskDetails() {
		this.isTaskDetailsShow = true;
	}

	closeTaskDetails() {
		this.isTaskDetailsShow = false;
	}

	closeSidebar() {
		$('#patient-details-sidebar').removeClass('show')
	}

}
