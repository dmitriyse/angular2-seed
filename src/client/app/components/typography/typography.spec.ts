import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it,
  beforeEachProviders
} from 'angular2/testing';
import {Location, Router, RouteRegistry, ROUTER_PRIMARY_COMPONENT} from 'angular2/router';
import {SpyLocation} from 'angular2/src/mock/location_mock';
import {RootRouter} from 'angular2/src/router/router';

import {Component, provide} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {TypographyPage} from './typography';

export function main() {
  beforeEachProviders(() => [
    RouteRegistry,
    provide(Location, {useClass: SpyLocation}),
    provide(ROUTER_PRIMARY_COMPONENT, {useValue: TypographyPage}),
    provide(Router, {useClass: RootRouter})
  ]);

  describe('typography component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then((rootTC) => {
            let authDOMEl = rootTC.debugElement.children[0].nativeElement;

            expect(DOM.querySelectorAll(authDOMEl, 'h1')[0].textContent).toEqual('Typography');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  directives: [TypographyPage],
  template: '<typography></typography>'
})
class TestComponent {}
