import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { MissionsComponent } from './missions/missions.component';
import { MissionDetailComponent } from './mission-detail/mission-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { effects, store } from './store';
import { PlayerComponent } from './player/player.component';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    MissionsComponent,
    MissionDetailComponent,
    PlayerComponent,
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
