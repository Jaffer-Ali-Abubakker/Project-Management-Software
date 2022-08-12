import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevHomeComponent } from './dev-home.component';

describe('DevHomeComponent', () => {
  let component: DevHomeComponent;
  let fixture: ComponentFixture<DevHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
