import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistComponent } from './components/search-page/playlist/playlist.component';
import { PlayerComponent } from './components/search-page/player/player.component';
import { SearchComponent } from './components/search-page/search/search.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { RegisterComponent } from './components/register/register.component';
import { apiTokenInterceptor } from './interceptors/apiToken.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        PlaylistComponent,
        PlayerComponent,
        SearchComponent,
        HomePageComponent,
        LoginPageComponent,
        SearchPageComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: apiTokenInterceptor,
        multi: true,
    },],
    bootstrap: [AppComponent]
})
export class AppModule { }
