import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllHardwaresComponent } from './show-all-hardwares.component';

describe('ShowAllHardwaresComponent', () => {
  let component: ShowAllHardwaresComponent;
  let fixture: ComponentFixture<ShowAllHardwaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllHardwaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllHardwaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
