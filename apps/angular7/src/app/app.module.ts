import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';
import {ActivatedRoute, PreloadAllModules, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

@Component({
  template: `
    <div style="background-color: green">
      <div>Angular A!</div>
      <div>Go to Angular A</div>
      <div><a routerLink="/angular_b">Go to Angular B</a></div>
      <div><a routerLink="/angularjs_a">Go to AngularJS A</a></div>
      <div><a routerLink="/angularjs_b">Go to AngularJS B</a></div>
    </div>
  `
})
export class AngularAComponent {
}

@Component({
  template: `
    <div style="background-color: green">
      <div>Angular B!</div>
      <div><a routerLink="/angular_a">Go to Angular A</a></div>
      <div>Go to Angular B</div>
      <div><a routerLink="/angularjs_a">Go to AngularJS A</a></div>
      <div><a routerLink="/angularjs_b">Go to AngularJS B</a></div>
    </div>
  `
})
export class AngularBComponent {
}

@NgModule({
  declarations: [
    AppComponent,
    AngularAComponent,
    AngularBComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'angular_a', pathMatch: 'full'},
      {path: 'angular_a', component: AngularAComponent},
      {path: 'angular_b', component: AngularBComponent},
      {path: '', loadChildren: '../angularjs/angularjs.module#AngularJSModule'}
    ], {
      enableTracing: true,
      // Uncomment to enable preloading and prebootstrapping
      // preloadingStrategy: PreloadAllModules
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
