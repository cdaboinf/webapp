import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoServicesComponent } from './demo-services.component';

describe('DemoServicesComponent', () => {
  let component: DemoServicesComponent;
  let fixture: ComponentFixture<DemoServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
