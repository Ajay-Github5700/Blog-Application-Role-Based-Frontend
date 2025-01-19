import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhildCartComponent } from './whild-cart.component';

describe('WhildCartComponent', () => {
  let component: WhildCartComponent;
  let fixture: ComponentFixture<WhildCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhildCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhildCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
