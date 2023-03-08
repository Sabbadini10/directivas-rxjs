import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ThemeDirective } from './directivas/theme.directive';
import { ReactiveModule } from './reactive/reactive.module';

@NgModule({
  declarations: [
    AppComponent,
    ThemeDirective
  ],
  imports: [
    BrowserModule,
    ReactiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
