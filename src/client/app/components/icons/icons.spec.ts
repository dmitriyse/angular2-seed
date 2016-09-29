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
import {IconsPage} from './icons';

export function main() {
  beforeEachProviders(() => [
    RouteRegistry,
    provide(Location, {useClass: SpyLocation}),
    provide(ROUTER_PRIMARY_COMPONENT, {useValue: IconsPage}),
    provide(Router, {useClass: RootRouter})
  ]);

  describe('icons component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then((rootTC) => {
            let iconsDOMEl = rootTC.debugElement.children[0].nativeElement;

            expect(DOM.querySelectorAll(iconsDOMEl, 'h1')[0].textContent).toEqual('Icons');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  directives: [IconsPage],
  template: '<icons></icons>'
})
class TestComponent {}
