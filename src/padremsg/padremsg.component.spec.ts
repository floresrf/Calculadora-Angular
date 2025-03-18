import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadremsgComponent } from './padremsg.component';

describe('PadremsgComponent', () => {
  let component: PadremsgComponent;
  let fixture: ComponentFixture<PadremsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadremsgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadremsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
