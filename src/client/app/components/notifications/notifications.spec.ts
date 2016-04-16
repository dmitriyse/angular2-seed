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
import {NotificationsPage} from './notifications';

export function main() {
  beforeEachProviders(() => [
    RouteRegistry,
    provide(Location, {useClass: SpyLocation}),
    provide(ROUTER_PRIMARY_COMPONENT, {useValue: NotificationsPage}),
    provide(Router, {useClass: RootRouter})
  ]);

  describe('notifications component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then((rootTC) => {
            let notificationsDOMEl = rootTC.debugElement.children[0].nativeElement;

            expect(DOM.querySelectorAll(notificationsDOMEl, 'h1')[0].textContent).toEqual('Notifications');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  directives: [NotificationsPage],
  template: '<notifications></notifications>'
})
class TestComponent {}
