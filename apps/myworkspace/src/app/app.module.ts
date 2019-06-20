import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {
  ZenThemeManagerModule,
  ThemeService
} from '@myworkspace/zen-theme-manager';
import { CardComponent } from './card/card.component';
@NgModule({
  declarations: [AppComponent, TodoListComponent, CardComponent],
  imports: [BrowserModule, ZenThemeManagerModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
