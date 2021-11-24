import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements AfterViewInit {

  constructor() { }
  displayedColumns: string[] = ['regNo', 'name', 'attendance'];
  dataSource = new MatTableDataSource<Student>(ELEMENT_DATA);
  hideRequiredControl = new FormControl(false);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}

export interface Student {
  regNo: number;
  name: string;
  Description: string;
}

const ELEMENT_DATA: Student[] = [
  {regNo: 1, name: 'Violin', Description: 'Playing Instructions'},
  {regNo: 2, name: 'Piani',Description: 'Playing Instructions'},
  {regNo: 3, name: 'Bass Guitar', Description: 'Playing Instructions'},
  {regNo: 4, name: 'Guitar', Description: 'Playing Instructions'},
  {regNo: 5, name: 'Electric Guitars', Description: 'Playing Instructions'},
  {regNo: 6, name: 'Carlos don', Description: 'Playing Instructions'},
  {regNo: 7, name: 'Woodwind',Description: 'Playing Instructions'},
  {regNo: 8, name: 'Percussion', Description: 'Playing Instructions'},
  {regNo: 9, name: 'Flute',Description: 'Playing Instructions'},
];


