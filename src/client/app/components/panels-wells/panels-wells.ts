import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {WrapperCmp} from '../header/header';

@Component({
  selector: 'panels-wells',
  templateUrl: 'app/components/panels-wells/panels-wells.html',
  styleUrls: ['app/components/panels-wells/panels-wells.css'],
  directives: [WrapperCmp, CORE_DIRECTIVES]
})
export class PanelsWellsPage {
}
