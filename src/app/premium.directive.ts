import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appPremium]',
})
export class PremiumDirective {
  @HostBinding('style.color')
  @Input()
  color: string = 'blue';

  constructor() {}
}
