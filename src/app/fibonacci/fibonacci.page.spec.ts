import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FibonacciPage } from './fibonacci.page';

describe('FibonacciPage', () => {
  let component: FibonacciPage;
  let fixture: ComponentFixture<FibonacciPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FibonacciPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
