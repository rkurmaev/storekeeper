import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPageComponentComponent } from './default-page-component.component';

describe('DefaultPageComponentComponent', () => {
  let component: DefaultPageComponentComponent;
  let fixture: ComponentFixture<DefaultPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
