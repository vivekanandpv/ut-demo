import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should emit the new count on increment', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const instance = fixture.componentInstance;
    const inputValue = 101;
    instance.counter = inputValue;
    instance.inc.subscribe((v) => {
      expect(v).toBe(inputValue + 1);
    });

    instance.increment();
  });
});
