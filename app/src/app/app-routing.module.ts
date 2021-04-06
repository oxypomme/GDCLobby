import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { MissionBriefContextComponent } from './mission-brief-context/mission-brief-context.component';
import { MissionBriefMissionComponent } from './mission-brief-mission/mission-brief-mission.component';
import { MissionDetailComponent } from './mission-detail/mission-detail.component';
import { MissionModsetComponent } from './mission-modset/mission-modset.component';
import { MissionOrgaBlueforComponent } from './mission-orga-bluefor/mission-orga-bluefor.component';
import { MissionPlayersComponent } from './mission-players/mission-players.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: MissionDetailComponent },
  { path: 'context', component: MissionBriefContextComponent },
  { path: 'orga-blufor', component: MissionOrgaBlueforComponent },
  { path: 'mission', component: MissionBriefMissionComponent },
  { path: 'modset', component: MissionModsetComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'list-player', component: MissionPlayersComponent },
  //{ path: 'list-player/:id', component: MissionPlayersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
