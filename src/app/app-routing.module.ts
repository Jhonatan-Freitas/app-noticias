import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home/:categoria',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'tecnologia', loadChildren: './tecnologia/tecnologia.module#TecnologiaPageModule' },
  { path: 'esportes', loadChildren: './esportes/esportes.module#EsportesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
