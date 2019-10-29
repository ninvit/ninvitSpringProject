import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDiaComponent } from './update-dia.component';

describe('UpdateDiaComponent', () => {
  let component: UpdateDiaComponent;
  let fixture: ComponentFixture<UpdateDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
