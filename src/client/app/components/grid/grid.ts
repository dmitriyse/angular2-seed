import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {WrapperCmp} from '../header/header';

@Component({
  selector: 'grid',
  templateUrl: 'app/components/grid/grid.html',
  styleUrls: ['app/components/grid/grid.css'],
  directives: [WrapperCmp, CORE_DIRECTIVES]
})
export class GridPage {
}
