import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeteComponent } from './tete.component';

describe('TeteComponent', () => {
  let component: TeteComponent;
  let fixture: ComponentFixture<TeteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
