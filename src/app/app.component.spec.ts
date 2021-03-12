import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DemoService } from './demo.service';

const baseMessage = 'some message from mock';

class MockDemoService {
  val = baseMessage;

  getMessage(): string {
    return this.val.toUpperCase();
  }
}

describe('AppComponent', () => {
  let comp: AppComponent;
  let service: DemoService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AppComponent,
        { provide: DemoService, useClass: MockDemoService },
      ],
    });

    comp = TestBed.inject(AppComponent);
    service = TestBed.inject(DemoService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have the message as provided by the mock', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const instance = fixture.componentInstance;

    expect(instance.message).toBe(baseMessage.toUpperCase());
  });
});
