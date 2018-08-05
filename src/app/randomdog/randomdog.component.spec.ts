import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomdogComponent } from './randomdog.component';

describe('RandomdogComponent', () => {
  let component: RandomdogComponent;
  let fixture: ComponentFixture<RandomdogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomdogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomdogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
