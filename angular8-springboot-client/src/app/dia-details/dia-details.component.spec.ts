import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaDetailsComponent } from './dia-details.component';

describe('DiaDetailsComponent', () => {
  let component: DiaDetailsComponent;
  let fixture: ComponentFixture<DiaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
