import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { CustomDateFormatPipe } from './Common/pipes/datefilter.pipe';
import { UrlifyPipe } from './Common/pipes/Urlify.pipe';
import { PhoneNumberPipe } from './Common/pipes/PhoneNumber.pipe';
import { AttachmentExtensionPipe } from './Common/pipes/AttachmentExtension.pipe';
import { HttpHelper } from './Common/helper/httpHelper';
import { MessageHelperService } from './Common/helper/message-helper.service';
import { AgGridModule } from 'ag-grid-angular';
import { ModalLayoutComponent } from './Common/layout/modal-layout/modal-layout.component';
import { AgGridLayoutComponent } from './Common/layout/ag-grid-layout/ag-grid-layout.component';
import { HomeLayoutComponent } from './Common/layout/base-layout/home-layout.component';
import { LoginLayoutComponent } from './Common/layout/base-layout/login-layout.component';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { HeaderLayoutComponent } from './Common/layout/header-layout/header-layout.component';
import { SidebarLayoutComponent } from './Common/layout/sidebar-layout/sidebar-layout.component';


@NgModule({
    declarations: [
        HomeLayoutComponent,
        LoginLayoutComponent,
        HeaderLayoutComponent,
        SidebarLayoutComponent,
        CustomDateFormatPipe,
        UrlifyPipe,
        PhoneNumberPipe,
        AttachmentExtensionPipe,
        ModalLayoutComponent,
        AgGridLayoutComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
        RouterModule,
        AgGridModule.withComponents(),
        NgProgressModule.withConfig({
            color: '#4DA0A5',
            spinner: false
        }),
        NgProgressHttpModule,
    ],
    exports: [
        HomeLayoutComponent,
        LoginLayoutComponent,
        HeaderLayoutComponent,
        SidebarLayoutComponent,
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        CustomDateFormatPipe,
        UrlifyPipe,
        PhoneNumberPipe,
        AttachmentExtensionPipe,
        ModalLayoutComponent,
        AgGridLayoutComponent
    ],
    bootstrap: [AppComponent],
    providers: [MessageHelperService]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: [HttpHelper]
        };
    }
}
