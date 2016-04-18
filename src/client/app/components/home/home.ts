import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {WrapperCmp} from '../header/header';

@Component({
  selector: 'timeline',
  templateUrl: 'app/components/home/timeline.html',
  styleUrls: ['app/components/home/timeline.css'],
  directives: [CORE_DIRECTIVES]
})
class TimelineCmp {}

@Component({
  selector: 'notifications',
  templateUrl: 'app/components/home/notifications.html',
  directives: [CORE_DIRECTIVES]
})
class NotificationCmp {}

@Component({
  selector: 'chat',
  templateUrl: 'app/components/home/chat.html',
  directives: [CORE_DIRECTIVES]
})
class ChatCmp {}

@Component({
  selector: 'stats',
  templateUrl: 'app/components/home/stats.html',
  properties: ['number', 'comments', 'colour', 'type'],
  directives: [CORE_DIRECTIVES]
})
class StatsCmp {
  number:number;
  comments:string;
  colour:string;
  type:string;
}

@Component({
  selector: 'dashboard',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  directives: [WrapperCmp, StatsCmp, TimelineCmp, NotificationCmp, ChatCmp, CORE_DIRECTIVES]
})
export class HomePage {
}
