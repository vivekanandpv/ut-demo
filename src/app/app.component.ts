import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() counter: number = 0;
  @Output() inc = new EventEmitter<number>();

  increment() {
    ++this.counter;
    this.inc.emit(this.counter);
  }
}
