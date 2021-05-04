import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { MissionBriefContextComponent } from './mission-brief-context/mission-brief-context.component';
import { MissionBriefIntelComponent } from './mission-brief-intel/mission-brief-intel.component';
import { MissionBriefMissionComponent } from './mission-brief-mission/mission-brief-mission.component';
import { MissionDetailComponent } from './mission-detail/mission-detail.component';
import { MissionModsetComponent } from './mission-modset/mission-modset.component';
import { MissionOrgaBlueforComponent } from './mission-orga-bluefor/mission-orga-bluefor.component';
import { MissionPlayersDetailComponent } from './mission-players-detail/mission-players-detail.component';
import { MissionPlayersComponent } from './mission-players/mission-players.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: MissionDetailComponent },
  { path: 'context', component: MissionBriefContextComponent },
  { path: 'orga-blufor', component: MissionOrgaBlueforComponent },
  { path: 'intel', component: MissionBriefIntelComponent },
  { path: 'mission', component: MissionBriefMissionComponent },
  { path: 'modset', component: MissionModsetComponent },
  { path: 'list-player', component: MissionPlayersComponent },
  { path: 'list-player/:id', component: MissionPlayersDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
