import {Component, ElementRef} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Dropdown, DropdownMenu, DropdownToggle, ACCORDION_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import {ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
  selector: 'header-notification',
  templateUrl: 'app/components/header/header-notification.html',
  directives: [Dropdown, DropdownMenu, DropdownToggle, ROUTER_DIRECTIVES, CORE_DIRECTIVES],
  viewProviders: [Dropdown, DropdownMenu, DropdownToggle, ElementRef]
})
export class HeaderNotification {
  toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }
}

@Component({
  selector: 'sidebar-search',
  templateUrl: 'app/components/header/sidebar-search.html',
  directives: []
})
export class SidebarSearch {

}

@Component({
  selector: 'sidebar',
  templateUrl: 'app/components/header/sidebar.html',
  directives: [ROUTER_DIRECTIVES, SidebarSearch, ACCORDION_DIRECTIVES]
})
export class Sidebar {
}

@Component({
  selector: 'header',
  templateUrl: 'app/components/header/header.html',
  directives: [Sidebar, HeaderNotification]
})
export class Header {

}

@Component({
  selector: 'wrapper',
  template: `<div id="wrapper">
      <header></header>
      <div id="page-wrapper" style="min-height: 561px;">
        <ng-content></ng-content>
      </div>
    </div>`,
  directives: [Header, CORE_DIRECTIVES]
})
export class WrapperCmp {
}
