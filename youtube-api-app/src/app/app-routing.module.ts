import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {SearchPageComponent} from './components/search-page/search-page.component';
import {IsLoggedGuard} from "./guards/isLogged/is-logged.guard";
import {RegisterComponent} from "./components/register/register.component";


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'youtube-search', component: SearchPageComponent, canActivate: [IsLoggedGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
