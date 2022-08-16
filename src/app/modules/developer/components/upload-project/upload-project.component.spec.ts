import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProjectComponent } from './upload-project.component';

describe('UploadProjectComponent', () => {
  let component: UploadProjectComponent;
  let fixture: ComponentFixture<UploadProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
