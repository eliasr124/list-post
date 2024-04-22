import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTableComponent } from './list-table/list-table.component';
import { UserTableItemComponent } from './user-list-item/list-table-item.component';
import { AddListComponent } from './add-post/add-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTableComponent,
    UserTableItemComponent,
    AddListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
