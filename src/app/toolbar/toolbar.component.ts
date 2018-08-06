import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import {MatCommonModule} from '@angular/material/core';
import {MatToolbarRow, MatToolbar} from '@angular/material/toolbar';
import { MatIconModule, MatIcon } from '../../../node_modules/@angular/material';
import { Router, RouterModule, Routes } from '@angular/router';
import { ListpeopleComponent } from './listpeople/listpeople.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})


@NgModule({
  declarations: [
    MatToolbar, MatToolbarRow
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

  formPerson = 'profesionales';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  btnListPeople = function(){
    
  }

}
