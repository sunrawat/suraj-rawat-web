import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './src/app/components/search-page/search-page.component';

const routes: Routes = [{
  path:"",
  redirectTo: "search",
  pathMatch: "full"

},
{
  path:"search",
  component: SearchPageComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
