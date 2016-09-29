import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {WrapperCmp} from '../header/header';

@Component({
  selector: 'chart',
  templateUrl: 'app/components/chart/chart-element.html',
  properties: ['title']
})
class Chart {
  title: string;
}

@Component({
  selector: 'chart-page',
  templateUrl: 'app/components/chart/chart.html',
  styleUrls: ['app/components/chart/chart.css'],
  directives: [WrapperCmp, Chart, CORE_DIRECTIVES]
})
export class ChartPage {
}
