import { Component, OnInit, NgModule } from '@angular/core';
import { MatTabsModule, MatTab, MatTabGroup, MatTabChangeEvent } from '@angular/material/tabs';
import { ServiceDataService } from '../../services/service-data.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})

@NgModule({
  declarations: [
  ],
  imports: [
    MatTabsModule
  ],
  exports: [
    MatTab, MatTabGroup
  ],
  providers: []

})
export class TabsComponent implements OnInit {

  formPerson:string;
  subLabel: string;

  constructor(private labelData: ServiceDataService) { 
    //this.labelData = new ServiceDataService();
  }

  ngOnInit() {
    this.labelData.currentLabel.subscribe(formPerson => this.formPerson = formPerson);
    this.labelData.currentSubLabel.subscribe(subLabel => this.subLabel = subLabel);
    //this.tabChanged(new MatTabChangeEvent);
  }


  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    if (tabChangeEvent.index === 0) {
      this.changeSubLabelManage('Reference form');
      this.changeLabelManage('Professional');
    } else {
      this.changeSubLabelManage('Accompanying person form');
      this.changeLabelManage('Patient');

    }
  }

  changeSubLabelManage(labelChanged:string){
    this.labelData.changeSubLabel(labelChanged);
  }

   changeLabelManage(labelChanged:string){
    this.labelData.changeLabel(labelChanged);
  }

}
