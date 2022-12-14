import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared.module';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  { path: '', component: DashboardComponent }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    RouterModule.forChild(route)
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
