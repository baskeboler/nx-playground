import { Component } from '@angular/core';
import { ThemeService } from '@myworkspace/zen-theme-manager';
@Component({
  providers: [ThemeService],
  selector: 'myworkspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myworkspace';

  constructor(private themeManager: ThemeService) {}

  switchTheme() {
    this.themeManager.alternativeTheme();
  }
}
