import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionDetailComponent } from './mission-detail/mission-detail.component';
import { MissionsComponent } from './missions/missions.component';

const routes: Routes = [
  { path: '', redirectTo: 'mission', pathMatch: 'full' },
  { path: 'mission', component: MissionsComponent },
  { path: 'missions/:id', component: MissionDetailComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
