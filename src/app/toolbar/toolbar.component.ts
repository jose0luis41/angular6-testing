import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {MatCommonModule} from '@angular/material/core';
import {MatToolbarRow, MatToolbar} from '@angular/material/toolbar';
import { MatIconModule, MatIcon } from '../../../node_modules/@angular/material';
import { ServiceDataService } from '../services/service-data.service';

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

  formPerson = 'Professional';
  labelManage = true;

  constructor(private labelData: ServiceDataService) { }

  ngOnInit() {
    this.labelData.currentLabel.subscribe(formPerson => this.formPerson = formPerson);
  }

  /*

  changeLabel(val: boolean){
    console.log(val);
    if(val){
      this.formPerson = 'Professional';
    }else{
      this.formPerson = 'Patient';
    }
  }*/

  setLabel(value){
    this.labelManage = value;
  }

  btnListPeople = function(){
    
  }

}
