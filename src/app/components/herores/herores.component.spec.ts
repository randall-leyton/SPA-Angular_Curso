import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroresComponent } from './herores.component';

describe('HeroresComponent', () => {
  let component: HeroresComponent;
  let fixture: ComponentFixture<HeroresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
