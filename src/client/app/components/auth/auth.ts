import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'auth',
  templateUrl: 'app/components/auth/auth.html',
  styleUrls: ['app/components/auth/auth.css'],
  directives: [CORE_DIRECTIVES]
})
export class AuthPage {
}
