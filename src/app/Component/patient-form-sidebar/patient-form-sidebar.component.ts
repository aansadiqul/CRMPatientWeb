import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
	selector: 'app-patient-form-sidebar',
	templateUrl: './patient-form-sidebar.component.html',
	styleUrls: ['./patient-form-sidebar.component.css']
})
export class PatientFormSidebarComponent implements OnInit {



	constructor() { }

	ngOnInit() {
	}

	closeSidebar() {
		$('#patient-form-sidebar').removeClass('show');
	}

}
