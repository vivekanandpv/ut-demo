import { DebugElement } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DemoService } from './demo.service';

const baseMessage = 'some message from mock';

describe('AppComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  //  runs only in a browser
  it('should display the message to the DOM in <p> -- direct', () => {
    //  createComponent() does not bind data!
    const fixture = TestBed.createComponent(AppComponent);
    const instance = fixture.componentInstance;
    instance.message = baseMessage;

    fixture.detectChanges(); //  required for binding

    const element: HTMLElement = fixture.nativeElement;
    const paragraphElement: HTMLElement = element.querySelector(
      'p'
    ) as HTMLElement;
    expect(paragraphElement.textContent).toBe(baseMessage);
  });

  //  assured to run even in SSR
  it('should display the message to the DOM in <p> -- verbose', () => {
    //  createComponent() does not bind data!
    const fixture = TestBed.createComponent(AppComponent);
    const instance = fixture.componentInstance;
    instance.message = baseMessage;

    fixture.detectChanges(); //  required for binding

    const debugElement: DebugElement = fixture.debugElement;
    const paragraphDebugElement: DebugElement = debugElement.query(By.css('p'));
    const paragraphElement: HTMLElement = paragraphDebugElement.nativeElement;
    expect(paragraphElement.textContent).toBe(baseMessage);
  });
});
