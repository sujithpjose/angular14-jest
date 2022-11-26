import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular14JestComponent } from './angular14-jest.component';

describe('Angular14JestComponent', () => {
  let component: Angular14JestComponent;
  let fixture: ComponentFixture<Angular14JestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angular14JestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angular14JestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
