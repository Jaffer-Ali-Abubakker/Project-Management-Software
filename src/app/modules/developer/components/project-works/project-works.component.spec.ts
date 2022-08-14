import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWorksComponent } from './project-works.component';

describe('ProjectWorksComponent', () => {
  let component: ProjectWorksComponent;
  let fixture: ComponentFixture<ProjectWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectWorksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
