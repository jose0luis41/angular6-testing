import { Component, OnInit, NgModule, Input } from '@angular/core';
import { MatInputModule, MatFormFieldModule, MatFormField, MatInput, MatOption, MatOptionModule, MatNativeDateModule, MatCheckboxModule, MatCheckbox, MatButtonModule, MatButton, MatSnackBar, MatSnackBarModule, MatCardModule, MatCard, MatCardContent, MatFormFieldControl } from '@angular/material';
import { MatDatepickerModule, MatDatepicker, MatDatepickerToggle, MatDatepickerInput } from '@angular/material/datepicker';
import { MatSelectModule, MatSelect } from '@angular/material/select';
import { PersonService } from '../../../services/person.service';
import { Reference } from '../../../models/reference';

import { NgForm, FormControl, Validators, FormGroup, FormBuilder, ReactiveFormsModule, FormsModule } from '../../../../../node_modules/@angular/forms';
import { Person } from '../../../models/person';
import { ServiceDataService } from '../../../services/service-data.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

@NgModule({
  declarations: [],
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
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
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
    MatCardContent,


  ],
  providers: [],

})
export class FormComponent implements OnInit {

  public idTypes = [{ 'id': 1, 'name': 'Cédula' }, { 'id': 2, 'name': 'Tarjeta de identidad' }, { 'id': 3, 'name': 'Cédula extranjera' },
  { 'id': 4, 'name': 'Registro Civil' }];

  public listFamiliar = [{ 'id': 1, 'name': 'Madre' }, { 'id': 2, 'name': 'Padre' }, { 'id': 3, 'name': 'Hijo' },
  { 'id': 4, 'name': 'Tio' }, { 'id': 5, 'name': 'Hermano' }];

  checked = false;
  maxDate = new Date();
  form: FormGroup;
  submitted = false;
  subLabel = "Reference Form"
  @Input('master') name: string;

  constructor(private personService: PersonService, private subLabelData: ServiceDataService, public snackBar: MatSnackBar, private fb: FormBuilder) {
    personService.selectedPerson.reference = new Reference();
  }

  openSnackBar(value) {
    if (value) {
      this.snackBar.open('Register Successful', 'OK', {
        duration: 4000,
      });
    } else {
      this.snackBar.open('There are errors in the form', 'OK', {
        duration: 4000,
      });
    }

  }

  ngOnInit() {
    this.subLabelData.currentSubLabel.subscribe(subLabel => this.subLabel = subLabel);

    
    this.form = this.fb.group({
      'nameForm': ['', Validators.required],
      'documentTypeForm': ['',],
      'idDocumentForm': ['',],
      'lastnameForm': ['', Validators.required],
      'datebirthForm': ['', Validators.required],
      'emailForm': ['', Validators.email],
      'phoneForm': ['', [Validators.minLength(7), Validators.maxLength(10)]],
      'checkForm': ['',],
      'referenceNameForm': ['', Validators.required],
      'referenceLastnameForm': ['', Validators.required],
      'referenceKindFamilyForm': ['', Validators.required],
      'referenceEmailForm': ['', Validators.email],
      'referencePhoneForm': ['', [Validators.minLength(7), Validators.maxLength(10)]],


    });
  }

  get formGr() {
    return this.form.controls;
  }

  setValues() {
    if (!this.checked) {
      this.form.controls['referenceNameForm'].setValidators([]);
      this.form.controls['referenceNameForm'].updateValueAndValidity();
      this.form.controls['referenceLastnameForm'].setValidators([]);
      this.form.controls['referenceLastnameForm'].updateValueAndValidity();
      this.form.controls['referenceKindFamilyForm'].setValidators([]);
      this.form.controls['referenceKindFamilyForm'].updateValueAndValidity();
      this.form.controls['referenceEmailForm'].setValidators([]);
      this.form.controls['referenceEmailForm'].updateValueAndValidity();
      this.form.controls['referencePhoneForm'].setValidators([]);
      this.form.controls['referencePhoneForm'].updateValueAndValidity();
    } else {
      this.form.controls['referenceNameForm'].setValidators([Validators.required]);
      this.form.controls['referenceNameForm'].updateValueAndValidity();
      this.form.controls['referenceLastnameForm'].setValidators([Validators.required]);
      this.form.controls['referenceLastnameForm'].updateValueAndValidity();
      this.form.controls['referenceKindFamilyForm'].setValidators([Validators.required]);
      this.form.controls['referenceKindFamilyForm'].updateValueAndValidity();
      this.form.controls['referenceEmailForm'].setValidators([Validators.email]);
      this.form.controls['referenceEmailForm'].updateValueAndValidity();
      this.form.controls['referencePhoneForm'].setValidators([Validators.minLength(7), Validators.maxLength(10)]);
      this.form.controls['referencePhoneForm'].updateValueAndValidity();
    }
  }

  onSubmit(personForm: NgForm) {
    this.submitted = true;

    if (this.form.valid) {
      if (this.checked) {
        this.personService.selectedPerson.reference = new Reference();
        this.personService.selectedPerson.reference.name = "";
        this.personService.selectedPerson.reference.lastname = "";

        this.personService.addPerson(this.personService.selectedPerson);
        personForm.reset();
        this.openSnackBar(true);
        this.personService.selectedPerson = new Person();
        this.personService.selectedPerson.reference = new Reference();
      } else {
        this.personService.addPerson(this.personService.selectedPerson);
        personForm.reset();
        this.openSnackBar(true);
        this.personService.selectedPerson = new Person();
        this.personService.selectedPerson.reference = new Reference();
      }
    } else {
      this.openSnackBar(false);
    }


  }

}
