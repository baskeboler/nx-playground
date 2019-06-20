import { Injectable } from '@angular/core';
import { Theme } from './theme.model';

@Injectable()
export class ThemeService {
  constructor() {}

  setTheme(theme: Theme) {
    Object.keys(theme).forEach(k => {
      document.documentElement.style.setProperty(`--${k}`, theme[k]);
    });
  }

  public alternativeTheme() {
    const t: Theme = {
      cardBackground: 'darkgrey',
      cardColor: 'lightgrey',
      background: 'black',
      onBackground: 'lightgreen'
    };
    this.setTheme(t);
  }
}
