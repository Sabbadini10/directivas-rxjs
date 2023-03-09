import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ThemeDirective } from './directivas/theme.directive';
import { ReactiveModule } from './reactive/reactive.module';
import { ButtonToggleDirective } from './directivas/button-toggle.directive';

@NgModule({
  declarations: [
    AppComponent,
    ThemeDirective,
    ButtonToggleDirective
  ],
  imports: [
    BrowserModule,
    ReactiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
