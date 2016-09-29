import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {WrapperCmp} from '../header/header';

@Component({
  selector: 'typography',
  templateUrl: 'app/components/typography/typography.html',
  styleUrls: ['app/components/typography/typography.css'],
  directives: [WrapperCmp, CORE_DIRECTIVES]
})
export class TypographyPage {
}
