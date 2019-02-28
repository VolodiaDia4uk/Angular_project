import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrComponent } from './registr.component';

describe('RegistrComponent', () => {
  let component: RegistrComponent;
  let fixture: ComponentFixture<RegistrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
