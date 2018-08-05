import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedslistComponent } from './breedslist.component';

describe('BreedslistComponent', () => {
  let component: BreedslistComponent;
  let fixture: ComponentFixture<BreedslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
