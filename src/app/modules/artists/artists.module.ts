import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; 
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"; 

// Modules

import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ArtistsRoutingModule } from "./artists-routing.module";
//components
import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { ArtistsComponent } from './artists/artists.component'; 
import { ArtistDetailsComponent } from './artist-details/artist-details.component';


@NgModule({
  declarations: [
    ArtistSearchComponent,ArtistDetailsComponent,
    ArtistsComponent
  ],
  imports: [
    //CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    FormsModule, 
    ArtistsRoutingModule, 
    CommonModule,
    NgbModule, 
    ReactiveFormsModule, NgxUiLoaderModule
  ],
  providers: [
    
  ],
})
export class ArtistsModule {}
