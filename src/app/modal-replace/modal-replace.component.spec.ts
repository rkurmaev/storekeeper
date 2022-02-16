import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReplaceComponent } from './modal-replace.component';

describe('ModalComponent', () => {
  let component: ModalReplaceComponent;
  let fixture: ComponentFixture<ModalReplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalReplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalReplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
