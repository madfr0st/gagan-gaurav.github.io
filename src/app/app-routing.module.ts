import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from 'src/lib/card/card.component';
import { WallComponent } from 'src/lib/wall/wall.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/app-wall', pathMatch : 'full'},
  { path: "app-wall", component: WallComponent},
  { path: "app-card", component: CardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
