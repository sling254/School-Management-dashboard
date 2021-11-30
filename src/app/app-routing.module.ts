import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { TablesComponent } from './components/tables/tables.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { StudentManagerComponent } from './components/student-manager/student-manager.component';
import { CourseComponent } from './components/course/course.component';
import { SchoolManagementComponent } from './components/school-management/school-management.component';

import { TrainersComponent } from './components/trainers/trainers.component';


const routes: Routes = [
  {path: 'students',component:StudentManagerComponent},


  {path: 'courses',component:CourseComponent},
  {path: 'trainers',component:TrainersComponent},
  {path:"**", component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
