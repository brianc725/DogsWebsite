import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomdogComponent } from './randomdog/randomdog.component'
import { BreedslistComponent } from './breedslist/breedslist.component'

const routes: Routes = [
  {
    path: '',
    component: RandomdogComponent
  },
  {
    path: 'breedlist',
    component: BreedslistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
