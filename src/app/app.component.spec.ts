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

  it('should have initial counter as zero', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const instance = fixture.componentInstance;
    expect(instance.counter).toBe(0);
  });

  it('#increment should increment the counter', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const instance = fixture.componentInstance;
    instance.increment();
    expect(instance.counter).toBe(1);
  });
});
