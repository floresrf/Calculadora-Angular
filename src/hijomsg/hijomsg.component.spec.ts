import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijomsgComponent } from './hijomsg.component';

describe('HijomsgComponent', () => {
  let component: HijomsgComponent;
  let fixture: ComponentFixture<HijomsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HijomsgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijomsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
