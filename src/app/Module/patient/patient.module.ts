import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared.module';
import { PatientFormSidebarComponent } from 'src/app/Component/patient-form-sidebar/patient-form-sidebar.component';
import { PatientDetailsSidebarComponent } from 'src/app/Component/patient-details-sidebar/patient-details-sidebar.component';

const route: Routes = [
	{ path: '', component: PatientComponent },
]

@NgModule({
	imports: [
		CommonModule,
		SharedModule.forRoot(),
		RouterModule.forChild(route)
	],
	declarations: [
		PatientComponent,
		PatientFormSidebarComponent,
		PatientDetailsSidebarComponent
	]
})
export class PatientModule { }
