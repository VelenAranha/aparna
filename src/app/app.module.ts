import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { BadgeDirective } from './badge.directive'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [AppComponent, BadgeDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
