import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionDetailComponent } from './mission-detail/mission-detail.component';
import { MissionsComponent } from './missions/missions.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  { path: '', redirectTo: 'mission', pathMatch: 'full' },
  { path: 'mission', component: MissionsComponent },
  { path: 'missions/:id', component: MissionDetailComponent },
  { path: 'profile', component: PlayerComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
