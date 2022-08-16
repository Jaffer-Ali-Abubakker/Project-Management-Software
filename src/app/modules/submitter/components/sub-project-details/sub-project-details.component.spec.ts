import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubProjectDetailsComponent } from './sub-project-details.component';

describe('SubProjectDetailsComponent', () => {
  let component: SubProjectDetailsComponent;
  let fixture: ComponentFixture<SubProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubProjectDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
