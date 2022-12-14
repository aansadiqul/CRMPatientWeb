import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AgGridService } from 'src/app/Common/service/ag-grid.service';
import { HeaderService } from 'src/app/Common/service/header.service';
import { UserService } from 'src/app/Service/user.service';
import { GridApi, IServerSideDatasource, IServerSideGetRowsParams } from 'ag-grid-enterprise';
import { ResponseStatus } from 'src/app/Common/enums/appEnums';
declare var $: any;

@Component({
	selector: 'app-patient',
	templateUrl: './patient.component.html',
	styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

	private destroy: Subject<void> = new Subject<void>();
	gridApi: GridApi;
	totalCount: number = 0;

	constructor(
		private headerService: HeaderService,
		private userService: UserService,
		private aggridService: AgGridService
	) { }

	ngOnInit() {
		Promise.resolve().then(() => this.headerService.setTitle('Leads'));
	}

	/**
	 * aggrid data source with load
	 */
	defaultDataSource: IServerSideDatasource = {
		getRows: (params: IServerSideGetRowsParams) => {
			this.userService.getAllUser()
				.pipe(takeUntil(this.destroy))
				.subscribe(response => {
					if (response.responseCode == ResponseStatus.success) {
						this.totalCount = response.rows;
						params.success({ rowData: response.responseObj, rowCount: response.rows });
					}
				});
		}
	}

	columnDefs = [
		{ ...this.aggridService.createColumnDef("Name", "fullName") },
		{ ...this.aggridService.createColumnDef("Email", "email") },
		{ ...this.aggridService.createColumnDef("Phone Number", "phoneNumber") },
		{ ...this.aggridService.createColumnDef("Role", "role") },
		{ ...this.aggridService.createColumnDef("Supervisor", "supervisor") },
		{ ...this.aggridService.createColumnDef("Task Capacity", "taskCapacity") },
		{ ...this.aggridService.createColumnDef("Department", "department") },
		{ ...this.aggridService.createColumnDef("Organization", "organization") },
		{ ...this.aggridService.createColumnDef("Action", "action") }
	];

	gridOptions = {
		...this.aggridService.gridOptions,
		onGridReady: (e: any) => {
			this.gridApi = e.api;
			this.gridApi.setServerSideDatasource(this.defaultDataSource);
			//e.api.sizeColumnsToFit();
		}
	}



	onAction(event: any) {
		if (event == 'Add New') {
			$('#patient-form-sidebar').addClass('show');
		}
		if (event == 'Details') {
			$('#patient-details-sidebar').addClass('show')
		}
	}

	ngOnDestroy(): void {
		this.destroy.next();
		this.destroy.unsubscribe();
	}
}
