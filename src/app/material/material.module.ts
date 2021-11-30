import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';


const MaterialComponents = [
  MatButtonModule,
  MatSidenavModule,
  MatTableModule,
  MatPaginatorModule,
  MatSliderModule
];

@NgModule({
  imports: [ MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
