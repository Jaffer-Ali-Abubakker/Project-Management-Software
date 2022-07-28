import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagerDashboardComponent } from './project-manager-dashboard.component';

describe('ProjectManagerDashboardComponent', () => {
  let component: ProjectManagerDashboardComponent;
  let fixture: ComponentFixture<ProjectManagerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectManagerDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectManagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
