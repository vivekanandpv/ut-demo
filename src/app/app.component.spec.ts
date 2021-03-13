import { DebugElement } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { DemoService } from './demo.service';

const baseCounter = 100;

describe('AppComponent', () => {
  beforeEach(async () => {
    const demoService = jasmine.createSpyObj('DemoService', ['getCounter']);
    demoService.getCounter.and.returnValue(of(baseCounter));
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [
        {
          provide: DemoService,
          useValue: demoService,
        },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  //  runs only in a browser
  it('should get the async data from service', fakeAsync(() => {
    //  createComponent() does not bind data!
    const fixture = TestBed.createComponent(AppComponent);
    const element: HTMLElement = fixture.nativeElement;
    const paragraphElement: HTMLElement = element.querySelector(
      'p'
    ) as HTMLElement;

    fixture.detectChanges(); //  required for binding
    tick(); // move to the next tick, in case there is a delay, use tick(delay)
    fixture.detectChanges();

    expect(paragraphElement.textContent).toBe(
      '100',
      'async data binding failed'
    );
  }));
});
