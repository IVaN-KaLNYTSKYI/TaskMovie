import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from './components/header/header.component';
import {MoviesListComponent} from './components/movies-list/movies-list.component';
import {MovieListCardComponent} from './components/movie-list-card/movie-list-card.component';
import {PosterPreviewComponent} from './components/poster-preview/poster-preview.component';
import {StarsRatingComponent} from './components/stars-rating/stars-rating.component';
import {MovieInfoComponent} from './components/movie-info/movie-info.component';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {MoviesPageComponent} from './components/movies-page/movies-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GenreBadgeComponent } from './components/genre-badge/genre-badge.component';
import {RouterModule, Routes} from '@angular/router';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { MatSlideToggleModule} from "@angular/material/slide-toggle";
import { MoviesFilterComponent } from './components/movies-filter/movies-filter.component';
import {MatProgressSpinnerModule }from "@angular/material/progress-spinner";
import {MovieInterceptorService} from "./services/movie-interceptor.service";

let routes: Routes = [
  {path: '', component:MoviesListComponent },
  {path: 'movie/:id', component:MovieDetailComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesListComponent,
    MovieListCardComponent,
    PosterPreviewComponent,
    StarsRatingComponent,
    MovieInfoComponent,
    UserInfoComponent,
    MoviesPageComponent,
    GenreBadgeComponent,
    MovieDetailComponent,
    MoviesFilterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatIconModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:MovieInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
