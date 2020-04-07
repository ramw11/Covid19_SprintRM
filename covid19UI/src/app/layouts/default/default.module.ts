import { NewSensorComponent } from './../../modules/new-sensor/new-sensor.component';
import { PatientReleaseComponent } from './../../modules/patient-release/patient-release.component';
import { PatientHistoryComponent } from './../../modules/patient-data/patient-history/patient-history.component';
import { PatientSettingsComponent } from './../../modules/patient-data/patient-settings/patient-settings.component';
import { MonitorHeartRateComponent } from './../../modules/patient-data/patient-monitor/monitor-heart-rate/monitor-heart-rate.component';
import { MonitorSpo2Component } from './../../modules/patient-data/patient-monitor/monitor-spo2/monitor-spo2.component';
import { MonitorBreathingRateComponent } from './../../modules/patient-data/patient-monitor/monitor-breathing-rate/monitor-breathing-rate.component';
import { MonitorTemperatureComponent } from './../../modules/patient-data/patient-monitor/monitor-temperature/monitor-temperature.component';
import { PatientMonitorComponent } from './../../modules/patient-data/patient-monitor/patient-monitor.component';
import { PatientPersonalDataComponent } from './../../modules/patient-data/patient-personal-data/patient-personal-data.component';
import { PatientDataComponent } from './../../modules/patient-data/patient-data.component';
import { NewPatientComponent } from './../../modules/new-patient/new-patient.component';
import { RouterModule } from '@angular/router';
import { PatientsComponent } from './../../modules/patients/patients.component';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MatSidenavModule, 
         MatTableModule, 
         MatTabsModule, 
         MatIconModule, 
         MatInputModule, 
         MatSelectModule, 
         MatCheckboxModule, 
         MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DefaultComponent,
    PatientsComponent,
    NewPatientComponent,
    PatientDataComponent,
    PatientPersonalDataComponent,
    PatientSettingsComponent,
    PatientMonitorComponent,
    MonitorHeartRateComponent,
    MonitorSpo2Component,
    MonitorBreathingRateComponent,
    MonitorTemperatureComponent,
    PatientHistoryComponent,
    PatientReleaseComponent,
    NewSensorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    ChartsModule
  ]
})
export class DefaultModule { }
