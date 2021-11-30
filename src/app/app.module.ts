import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { TablesComponent } from './components/tables/tables.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { DashboardComponent } from './components/dashboard/dashboard.component';


 



@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ToolBarComponent,
    TablesComponent,
    NotfoundComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MaterialModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  opened = false;
 }
