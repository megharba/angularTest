import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAjoutComponent } from './page/page-ajout/page-ajout.component';
import { PageListeComponent } from './page/page-liste/page-liste.component';

const routes: Routes = [
  {path: 'Liste',component: PageListeComponent },
  {path: 'Ajout',component: PageAjoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
