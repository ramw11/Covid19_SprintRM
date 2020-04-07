import { NewSensorComponent } from './modules/new-sensor/new-sensor.component'
import { PatientReleaseComponent } from './modules/patient-release/patient-release.component';
import { PatientDataComponent } from './modules/patient-data/patient-data.component';
import { NewPatientComponent } from './modules/new-patient/new-patient.component';
import { PatientsComponent } from './modules/patients/patients.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';


const routes: Routes = [{
  path:'',
  component: DefaultComponent,
  children: [{
    path: '',
    component: PatientsComponent
  },{
    path: 'new-patient',
    component: NewPatientComponent
  },{
    path: 'patient-data',
    component: PatientDataComponent
  },{
    path: 'release-document',
    component : PatientReleaseComponent
  },{
    path: 'new-sensor',
    component: NewSensorComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
