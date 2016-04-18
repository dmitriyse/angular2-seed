import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {WrapperCmp} from '../header/header';

@Component({
  selector: 'buttons',
  templateUrl: 'app/components/buttons/buttons.html',
  styleUrls: ['app/components/buttons/buttons.css'],
  directives: [WrapperCmp, CORE_DIRECTIVES]
})
export class ButtonsPage {
}
