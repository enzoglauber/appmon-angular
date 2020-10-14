import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// import { MenuComponent, TopbarComponent } from './shared';

const routes: Routes = [
  {
    path: "", 
    pathMatch: "full",
    redirectTo: "/pokemons"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
