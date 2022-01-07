import { Component } from '@angular/core';
import packageInfo from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appVersion = packageInfo.version;
  environment = '';
  footerYear= new Date();
}
