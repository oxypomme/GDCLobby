import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { MissionDetailComponent } from './mission-detail/mission-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { effects, store } from './store';
import { EffectsModule } from '@ngrx/effects';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MissionInfoPanelComponent } from './mission-info-panel/mission-info-panel.component';
import { LoginComponent } from './login/login.component';
import { MissionBriefContextComponent } from './mission-brief-context/mission-brief-context.component';
import { MissionBriefIntelComponent } from './mission-brief-intel/mission-brief-intel.component';
import { MissionBriefMissionComponent } from './mission-brief-mission/mission-brief-mission.component';
import { MissionModsetComponent } from './mission-modset/mission-modset.component';
import { MissionOrgaBlueforComponent } from './mission-orga-bluefor/mission-orga-bluefor.component';
import { MissionPlayersComponent } from './mission-players/mission-players.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MissionDetailComponent,
    ContactComponent,
    NavbarComponent,
    MissionInfoPanelComponent,
    LoginComponent,
    MissionBriefContextComponent,
    MissionBriefIntelComponent,
    MissionBriefMissionComponent,
    MissionModsetComponent,
    MissionOrgaBlueforComponent,
    MissionPlayersComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(store),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot(effects),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
