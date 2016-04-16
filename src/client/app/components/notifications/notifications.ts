import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {WrapperCmp} from '../header/header';

@Component({
  selector: 'notifications',
  templateUrl: 'app/components/notifications/notifications.html',
  styleUrls: ['app/components/notifications/notifications.css'],
  directives: [WrapperCmp, CORE_DIRECTIVES]
})
export class NotificationsPage {
}
