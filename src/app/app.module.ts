import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { interceptorsLink } from './Common/interceptors/indexLink';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared.module';
import { MessageHelperService } from './Common/helper/message-helper.service';

import { ModalModule } from 'ngx-bootstrap/modal';
import { HeaderService } from './Common/service/header.service';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot({
			positionClass: 'toast-top-right'
		}),
		SharedModule.forRoot(),
		ModalModule.forRoot()
	],

	providers: [
		interceptorsLink,
		MessageHelperService,
		HeaderService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
