import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalestermComponent } from './salesterm.component';

describe('SalestermComponent', () => {
  let component: SalestermComponent;
  let fixture: ComponentFixture<SalestermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalestermComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalestermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
