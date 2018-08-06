import { Component, OnInit, NgModule } from '@angular/core';
import {MatTabsModule, MatTab, MatTabGroup} from '@angular/material/tabs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})

@NgModule({
  declarations:[
  ],
  imports:[
    MatTabsModule
  ],
  exports:[
    MatTab, MatTabGroup
  ],
  providers:[]

})
export class TabsComponent implements OnInit {
  
  formPerson = 'Profesionales';
  constructor() { }

  ngOnInit() {
  }

}
