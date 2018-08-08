import { Injectable } from '@angular/core';

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Person } from '../models/person';
@Injectable({
  providedIn: 'root'
})
export class PersonService {

  peopleList: AngularFireList<any>;
  selectedPerson: Person = new Person();

  constructor(private firebase: AngularFireDatabase) { }

  getPeople(){
      return this.peopleList = this.firebase.list('people');
    
  }

  addPerson(person: Person){
    this.getPeople();
    this.peopleList.push({
      name: person.name,
      lastname: person.lastname,
      documentType : person.documentType,
      document: person.document,
      birthday : person.birthday.toString(),
      email: person.email,
      phone: person.phone,
      isProfessional: person.isProfessional,
      reference: person.reference

    });
  }


  updatedPerson(person: Person){
    this.peopleList.update( person.$key,{
      name: person.name,
      lastname: person.lastname,
      documentType : person.documentType,
      document: person.document,
      birthday : person.birthday,
      email: person.email,
      reference: person.reference
    });
  }

  deletePerson($key: string){
    this.peopleList.remove($key);
  }
}
