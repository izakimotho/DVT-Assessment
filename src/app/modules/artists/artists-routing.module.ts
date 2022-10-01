import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
   
// Components  
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { ArtistsComponent } from './artists/artists.component';  
const routes: Routes = [
  
  {
    path: 'artists',
    component: ArtistSearchComponent
  },
   {
    path: 'list',
    component: ArtistsComponent
  
  },
  {
    path: 'artist-search/:artists_id',
    component: ArtistSearchComponent
  },

  {
    path: 'artist-details/:artists_id',
    component: ArtistDetailsComponent
  },  
 
 

  {
    path: '**',
    component: PageNotFoundComponent
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    // ConfirmExitGuard
  ]
})
export class ArtistsRoutingModule {

}
