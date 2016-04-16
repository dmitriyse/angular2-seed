import {Component, ViewEncapsulation} from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';
// import {HTTP_PROVIDERS} from 'http/http';

import {HomePage} from '../home/home';
import {FormPage} from '../form/form';
import {AuthPage} from '../auth/auth';
import {ChartPage} from '../chart/chart';
import {TablePage} from '../table/table';
import {ButtonsPage} from '../buttons/buttons';
import {NotificationsPage} from '../notifications/notifications';
import {TypographyPage} from '../typography/typography';
import {IconsPage} from '../icons/icons';
import {GridPage} from '../grid/grid';
import {NameList} from '../../shared/index';
import {PanelsWellsPage} from '../panels-wells/panels-wells';

@Component({
  selector: 'app',
  viewProviders: [NameList],
  template: '<router-outlet></router-outlet>',
  styleUrls: ['app/components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: HomePage, name: 'Dashboard.home' },
  { path: '/home', component: HomePage, name: 'Dashboard.home' },
  { path: '/form', component: FormPage, name: 'Dashboard.form' },
  { path: '/blank', component: HomePage, name: 'Dashboard.blank' },
  { path: '/login', component: AuthPage, name: 'Auth' },
  { path: '/chart', component: ChartPage, name: 'Dashboard.chart' },
  { path: '/table', component: TablePage, name: 'Dashboard.table' },
  { path: '/panels-wells', component: PanelsWellsPage, name: 'Dashboard.panels-wells' },
  { path: '/buttons', component: ButtonsPage, name: 'Dashboard.buttons' },
  { path: '/notifications', component: NotificationsPage, name: 'Dashboard.notifications' },
  { path: '/typography', component: TypographyPage, name: 'Dashboard.typography' },
  { path: '/icons', component: IconsPage, name: 'Dashboard.icons' },
  { path: '/grid', component: GridPage, name: 'Dashboard.grid' }
])
export class App {
}
