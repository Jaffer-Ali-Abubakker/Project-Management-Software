import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitterDashboardComponent } from './submitter-dashboard.component';

describe('SubmitterDashboardComponent', () => {
  let component: SubmitterDashboardComponent;
  let fixture: ComponentFixture<SubmitterDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitterDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
