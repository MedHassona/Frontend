import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { HomeComponent } from './shared/components/home/home.component';
import { SigninComponent } from './accounts/auth/signin/signin.component';
import { SignoutComponent } from './accounts/auth/signout/signout.component';
import { LabeledStoresComponent } from './shared/components/labeled-stores/labeled-stores.component';


const ROUTES: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    HomeComponent,
    SigninComponent,
    SignoutComponent,
    LabeledStoresComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
