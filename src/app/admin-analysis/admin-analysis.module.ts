import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDataTableComponent } from './admin-data-table/admin-data-table.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminChartsComponent } from './admin-charts/admin-charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AdminDataTableComponent,
    AdminChartsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [
    AdminDataTableComponent,
    AdminChartsComponent
  ],
})
export class AdminAnalysisModule { }
