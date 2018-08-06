import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { PeopleTableDataSource } from './people-table-datasource';
import { Person } from '../../models/person';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css']
})
export class PeopleTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: PeopleTableDataSource;
  peopleList: Person[];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'idtype', 'name', 'lastname', 'referencename', 'email', 'phone'];

  constructor(private personService: PersonService){}

  ngOnInit() {
    this.dataSource = new PeopleTableDataSource(this.paginator, this.sort);

     this.personService.getPeople().snapshotChanges().subscribe(item => {
      this.peopleList = [];
      item.forEach(element => {
        let currentPerson = element.payload.toJSON();
        currentPerson['$key'] = element.key;
        this.peopleList.push(currentPerson as Person);
      })
    });
  }
}
