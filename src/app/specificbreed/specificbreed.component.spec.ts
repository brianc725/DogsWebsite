import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificbreedComponent } from './specificbreed.component';

describe('SpecificbreedComponent', () => {
  let component: SpecificbreedComponent;
  let fixture: ComponentFixture<SpecificbreedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificbreedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificbreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
