import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaListComponent } from './dia-list.component';

describe('DiaListComponent', () => {
  let component: DiaListComponent;
  let fixture: ComponentFixture<DiaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
