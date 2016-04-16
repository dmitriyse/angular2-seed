import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {WrapperCmp} from '../header/header';

@Component({
  selector: 'form',
  templateUrl: 'app/components/form/form.html',
  styleUrls: ['app/components/form/form.css'],
  directives: [WrapperCmp, CORE_DIRECTIVES]
})
export class FormPage {
}
