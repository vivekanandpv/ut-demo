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
    const element: HTMLElement = fixture.nativeElement;
    const paragraphElement: HTMLElement = element.querySelector(
      'p'
    ) as HTMLElement;
    const buttonElement: HTMLElement = element.querySelector(
      'button'
    ) as HTMLElement;

    fixture.detectChanges(); //  required for binding

    expect(paragraphElement.textContent).toBe('0', 'initial state is not zero');

    buttonElement.dispatchEvent(new Event('click'));
    fixture.detectChanges(); //  required for binding

    expect(paragraphElement.textContent).toBe(
      '1',
      'did not increment to 1 after click'
    );
  });
});
