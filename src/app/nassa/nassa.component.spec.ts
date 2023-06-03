import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NassaComponent } from './nassa.component';

describe('NassaComponent', () => {
  let component: NassaComponent;
  let fixture: ComponentFixture<NassaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NassaComponent]
    });
    fixture = TestBed.createComponent(NassaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
