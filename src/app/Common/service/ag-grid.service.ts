import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AgGridService {

	constructor() { }

	/**
	 * create aggrid column defination
	 * @param headerName 
	 * @param field 
	 * @param width 
	 * @param editable 
	 * @param filter 
	 * @param cellRenderer 
	 * @param cellRendererParams 
	 * @param valueGetter 
	 * @returns 
	 */
	createColumnDef(headerName: string, field: string): any;
	createColumnDef(headerName: string, field: string, cellRenderer?: any): any;
	createColumnDef(headerName: string, field: string, cellRenderer?: any, width?: number, editable?: boolean,
		filter?: string, cellRendererParams?: any, valueGetter?: any): any {
		let obj = { headerName, field };
		if (width) {
			obj = Object.assign(obj, { width });
		}
		if (editable) {
			obj = Object.assign(obj, { editable });
		}
		if (filter) {
			obj = Object.assign(obj, { filter });
		}
		if (cellRenderer) {
			obj = Object.assign(obj, { cellRenderer });
		}
		if (cellRendererParams) {
			obj = Object.assign(obj, { cellRendererParams });
		}
		if (valueGetter) {
			obj = Object.assign(obj, { valueGetter });
		}
		return obj;
	}

	/**
	 * Default aggrid configuration setting
	 */
	get gridOptions() {
		return {
			rowModelType: "serverSide",
			serverSideStoreType: "partial",
			blockLoadDebounceMillis: 1,
			suppressCopyRowsToClipboard: true,
			suppressRowClickSelection: true,
			enableCellChangeFlash: true,
			suppressMenuHide: true,
			defaultColDef: {
				minWidth: 100,
				flex: 1,
				resizable: true,
				filterParams: {
					suppressAndOrCondition: true,
				},
				menuTabs: ["filterMenuTab"],
			},
			// icons: {
			// 	menu: '<span class="ag-icon ag-icon-filter" unselectable="on" role="presentation"></span>',
			// 	filter:
			// 		'<span class="ag-icon ag-icon-filter" style="display:none;" unselectable="on" role="presentation"></span>',
			// },
			rowHeight: 35,
			headerHeight: 35,
			cacheBlockSize: 100,
			rowBuffer: 50,
			tooltipShowDelay: 0
		}
	}
}
