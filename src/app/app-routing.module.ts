import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 
const routes: Routes = [
  {
    path: '',
    redirectTo: 'artists',
    pathMatch: 'full'
  },
  
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent }
  {
    path: '',  
        loadChildren: () => import('./modules/artists/artists.module').then(module => module.ArtistsModule)
       
  },
];


@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      enableTracing: false, // <-- debugging purposes only
       
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
