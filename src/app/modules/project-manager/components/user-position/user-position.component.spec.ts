import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPositionComponent } from './user-position.component';

describe('UserPositionComponent', () => {
  let component: UserPositionComponent;
  let fixture: ComponentFixture<UserPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
