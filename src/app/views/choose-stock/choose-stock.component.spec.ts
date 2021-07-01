import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseStockComponent } from './choose-stock.component';

describe('ChooseStockComponent', () => {
  let component: ChooseStockComponent;
  let fixture: ComponentFixture<ChooseStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
