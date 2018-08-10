import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomdogComponent } from './randomdog/randomdog.component';
import { BreedslistComponent } from './breedslist/breedslist.component';
import { SpecificbreedComponent } from './specificbreed/specificbreed.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "random",
    pathMatch: "full"
  },
  {
    path: "random",
    component: RandomdogComponent
  },
  {
    path: 'breedlist',
    component: BreedslistComponent
  },
  {
    path: 'specific/:breed',
    component: SpecificbreedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
