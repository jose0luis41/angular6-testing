
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleTableComponent } from './people-table.component';

describe('PeopleTableComponent', () => {
  let component: PeopleTableComponent;
  let fixture: ComponentFixture<PeopleTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
