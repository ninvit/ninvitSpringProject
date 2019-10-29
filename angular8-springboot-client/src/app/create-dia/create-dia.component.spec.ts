import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDiaComponent } from './create-dia.component';

describe('CreateDiaComponent', () => {
  let component: CreateDiaComponent;
  let fixture: ComponentFixture<CreateDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
