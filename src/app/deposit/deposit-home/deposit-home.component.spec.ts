import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositHomeComponent } from './deposit-home.component';

describe('DepositHomeComponent', () => {
  let component: DepositHomeComponent;
  let fixture: ComponentFixture<DepositHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
