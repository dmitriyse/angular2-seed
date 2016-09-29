import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it,
} from 'angular2/testing';

import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {AuthPage} from './auth';

export function main() {
  describe('auth component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then((rootTC) => {
            let authDOMEl = rootTC.debugElement.children[0].nativeElement;

            expect(DOM.querySelectorAll(authDOMEl, 'h3')[0].textContent).toEqual('Please Sign In');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  directives: [AuthPage],
  template: '<auth></auth>'
})
class TestComponent {}
