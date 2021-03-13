import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PremiumDirective } from './premium.directive';

@Component({
  template: `<h3 appPremium>Sample text here</h3>
    <p appPremium color="red">Paragraph text here</p>
    <p>Other text</p>`,
})
class TestComponent {}

describe('PremiumDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [PremiumDirective, TestComponent],
    }).createComponent(TestComponent);

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new PremiumDirective();
    expect(directive).toBeTruthy();
  });

  it('should change the colour of <h3> to blue by default', () => {
    const debugElement = fixture.debugElement.queryAll(
      By.directive(PremiumDirective)
    );
    const element = debugElement[0].nativeElement as HTMLElement;
    expect(element.style.color).toBe('blue');
  });

  it('should change the colour of <p> to red as applied', () => {
    const debugElement = fixture.debugElement.query(By.css('p[appPremium]'));
    const element = debugElement.nativeElement as HTMLElement;
    expect(element.style.color).toBe('red');
  });
});
