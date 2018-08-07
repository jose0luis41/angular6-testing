import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {MatCommonModule} from '@angular/material/core';
import {MatToolbarRow, MatToolbar} from '@angular/material/toolbar';
import { MatIconModule, MatIcon } from '../../../node_modules/@angular/material';
import {routingComponents } from '../app-routing.module';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})


@NgModule({
  declarations: [
    MatToolbar, MatToolbarRow,
  ],
  imports: [
    MatCommonModule,
    MatIconModule, 
  ],
  exports:[
    MatToolbar, MatToolbarRow, MatCommonModule, MatIcon
  ],
  providers: [],
})
export class ToolbarComponent implements OnInit {

  formPerson = 'professional';
  labelManage = true;

  constructor() { }

  ngOnInit() {
   
  }

  setLabel(value){
    this.labelManage = value;
  }

  btnListPeople = function(){
    
  }

}
