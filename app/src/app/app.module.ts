import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MissionBriefContextComponent } from './mission-brief-context/mission-brief-context.component';
import { MissionBriefIntelComponent } from './mission-brief-intel/mission-brief-intel.component';
import { MissionBriefMissionComponent } from './mission-brief-mission/mission-brief-mission.component';
import { MissionDetailComponent } from './mission-detail/mission-detail.component';
import { MissionInfoPanelComponent } from './mission-info-panel/mission-info-panel.component';
import { MissionModsetComponent } from './mission-modset/mission-modset.component';
import { MissionOrgaBlueforComponent } from './mission-orga-bluefor/mission-orga-bluefor.component';
import { MissionPlayersDetailComponent } from './mission-players-detail/mission-players-detail.component';
import { MissionPlayersComponent } from './mission-players/mission-players.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { effects, store } from './store';

@NgModule({
  declarations: [
    AppComponent,
    MissionDetailComponent,
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
    ProfileComponent,
    MissionPlayersDetailComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(store),
    EffectsModule.forRoot(effects),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
