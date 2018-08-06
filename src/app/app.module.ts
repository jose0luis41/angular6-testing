import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '../../node_modules/@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { TabsComponent } from './toolbar/tabs/tabs.component';

//firebase
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';

import {PersonService} from './services/person.service';
import { FormComponent } from './toolbar/tabs/form/form.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { PeopleTableComponent } from './toolbar/people-table/people-table.component';

@NgModule({
  declarations: [
    AppComponent, ToolbarComponent,TabsComponent, FormComponent, routingComponents, PeopleTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToolbarComponent,
    TabsComponent,
    FormComponent,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
