import { AfterViewInit, Component, ViewChild, OnInit, NgModule } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-student-manager',
  templateUrl: './student-manager.component.html',
  styleUrls: ['./student-manager.component.css']
})
export class StudentManagerComponent implements OnInit {

    constructor() { }
    students = ELEMENT_DATA
    // displayedColumns: string[] = ['regNo', 'name', 'attendance'];
    // dataSource = new MatTableDataSource<Student>(ELEMENT_DATA);
    // hideRequiredControl = new FormControl(false);
  
   // @ViewChild(MatPaginator) paginator!: MatPaginator;
  
    ngOnInit(): void {
      // this.dataSource.paginator = this.paginator;
    }
  }

// export class StudentManagerComponent implements AfterViewInit {

//   constructor() { }
//   displayedColumns: string[] = ['regNo', 'name', 'attendance'];
//   dataSource = new MatTableDataSource<Student>(ELEMENT_DATA);
//   hideRequiredControl = new FormControl(false);

//   @ViewChild(MatPaginator) paginator!: MatPaginator;

//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator;
//   }


// }

export interface Student {
  regNo: number;
  name: string;
  attendance: number;
}

const ELEMENT_DATA: Student[] = [
  {regNo: 1, name: 'Danny myles', attendance: 79},
  {regNo: 2, name: 'Harrizon mwangi',attendance: 78},
  {regNo: 3, name: 'Gideon plangat', attendance: 99},
  {regNo: 4, name: 'Beryll kalori', attendance: 69},
  {regNo: 5, name: 'Baron james', attendance: 89},
  {regNo: 6, name: 'Carlos don', attendance: 85},
  {regNo: 7, name: 'Martin nyles',attendance: 97},
  {regNo: 8, name: 'Oswald dennis', attendance: 55},
  {regNo: 9, name: 'mwaniki',attendance: 100},
  {regNo: 10, name: 'Nelson ted', attendance: 80},
];

