import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {WrapperCmp} from '../header/header';

@Component({
  selector: 'icons',
  templateUrl: 'app/components/icons/icons.html',
  styleUrls: ['app/components/icons/icons.css'],
  directives: [WrapperCmp, CORE_DIRECTIVES]
})
export class IconsPage {
}
