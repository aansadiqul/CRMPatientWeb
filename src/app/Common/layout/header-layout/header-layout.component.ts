import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../service/header.service';

@Component({
	selector: 'app-header-layout',
	templateUrl: './header-layout.component.html',
	styleUrls: ['./header-layout.component.css']
})
export class HeaderLayoutComponent implements OnInit {

	title: string = '';

	constructor(
		private headerService: HeaderService
	) { }

	ngOnInit() {
		this.headerService.title.subscribe(title => {
			this.title = title;
		});
	}

}
