import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WallComponent } from 'src/lib/wall/wall.component';

const routes: Routes = [
  { path: '', redirectTo: '/app-wall', pathMatch : 'full'},
  { path: "app-wall", component: WallComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
