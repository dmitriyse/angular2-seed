import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {WrapperCmp} from '../header/header';

@Component({
  selector: 'table',
  templateUrl: 'app/components/table/table.html',
  styleUrls: ['app/components/table/table.css'],
  directives: [WrapperCmp, CORE_DIRECTIVES]
})
export class TablePage {
}
