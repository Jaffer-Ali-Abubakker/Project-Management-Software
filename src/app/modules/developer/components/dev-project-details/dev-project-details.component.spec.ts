import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevProjectDetailsComponent } from './dev-project-details.component';

describe('DevProjectDetailsComponent', () => {
  let component: DevProjectDetailsComponent;
  let fixture: ComponentFixture<DevProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevProjectDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
