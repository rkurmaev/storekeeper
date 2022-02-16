import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFixComponent } from './modal-fix.component';

describe('ModalFixComponent', () => {
  let component: ModalFixComponent;
  let fixture: ComponentFixture<ModalFixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
