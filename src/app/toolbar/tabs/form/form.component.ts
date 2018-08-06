import { Component, OnInit, NgModule, Input } from '@angular/core';
import {MatInputModule, MatFormFieldModule, MatFormField, MatInput, MatOption, MatOptionModule, MatNativeDateModule, MatCheckboxModule, MatCheckbox, MatButtonModule, MatButton, MatSnackBar, MatSnackBarModule, MatCardModule, MatCard, MatCardContent} from '@angular/material';
import {MatDatepickerModule,  MatDatepicker, MatDatepickerToggle, MatDatepickerInput} from '@angular/material/datepicker';
import {MatSelectModule, MatSelect} from '@angular/material/select';
import { PersonService } from '../../../services/person.service';
import { Reference } from '../../../models/reference';

import { NgForm } from '../../../../../node_modules/@angular/forms';
import { Person } from '../../../models/person';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

@NgModule({
  declarations:[],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule, 
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    
  ],
  exports:[
    MatInput,
    MatFormField,
    MatSelect,
    MatOption,
    MatDatepicker,
    MatDatepickerToggle,
    MatDatepickerInput,
    MatCheckbox,
    MatButton,
    MatCard,
    MatCardContent

  ],
  providers:[]
})
export class FormComponent implements OnInit {

  public idTypes = [{'id':1, 'name': 'Cédula'}, {'id':2, 'name': 'Tarjeta de identidad'}, {'id':3, 'name': 'Cédula extranjera'},
  {'id':4, 'name': 'Registro Civil'}];

  public listFamiliar = [{'id':1, 'name': 'Madre'}, {'id':2, 'name': 'Padre'}, {'id':3, 'name': 'Hijo'},
  {'id':4, 'name': 'Tio'}, {'id':5, 'name': 'Hermano'}];

  checked = false;
  maxDate = new Date();


  @Input('master') name: string;

  constructor(private personService: PersonService, public snackBar: MatSnackBar) {
    personService.selectedPerson.reference = new Reference();
   }

   openSnackBar(){
    this.snackBar.open('Register Successful','OK',{
      duration:4000,
    });
   }

  ngOnInit() {
  }

  onSubmit(personForm: NgForm){
    console.log(this.personService.selectedPerson);
    this.personService.addPerson(this.personService.selectedPerson);
    personForm.reset();
    this.openSnackBar();
    this.personService.selectedPerson = new Person();
    this.personService.selectedPerson.reference = new Reference();
  }

}
