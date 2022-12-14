import { AllModules, GridApi, ModuleRegistry, ServerSideRowModelModule } from '@ag-grid-enterprise/all-modules';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

ModuleRegistry.registerModules([
  ServerSideRowModelModule,
]);

@Component({
  selector: 'app-ag-grid-layout',
  templateUrl: './ag-grid-layout.component.html',
  styleUrls: ['./ag-grid-layout.component.css']
})
export class AgGridLayoutComponent implements OnInit {

  @ViewChild('myGrid') grid!: AgGridAngular;
  @Input() gridOptions: any;
  @Input() columnDefs: any;
  @Input() page: string;
  @Input() hideSearch: boolean = true;
  @Input() overlayNoRowsTemplate: string;
  @Input() totalCount: number = 0;
  /**
   * Any button click will fire this event
   */
  @Output() onAction: EventEmitter<string> = new EventEmitter<string>();
  /**
 * Add action buttons and add css class for customize the design  ex. add, cancel, delete
 */
  @Input() objAction: any;
  modules: any = [AllModules, ServerSideRowModelModule];
  constructor() { }

  ngOnInit(): void {
  }

}

export interface Action {
  name: string;
  className: string;
  disabled: boolean;
  spinner: boolean;
}

