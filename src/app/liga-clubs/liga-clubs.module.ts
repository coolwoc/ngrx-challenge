import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LigaClubsRoutingModule } from './liga-clubs-routing.module';
import * as fromLigaClubs from './_store/liga-clubs.reducer';
import { LigaClubsEffects } from './_store/liga-clubs.effects';
import { LigaClubsFacade } from './_store/liga-clubs.facade';
import { TeamsService } from './_service/teams.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LigaClubsRoutingModule,
    StoreModule.forFeature(fromLigaClubs.featureName, fromLigaClubs.ligaClubsReducer),
    EffectsModule.forFeature([LigaClubsEffects])
  ],
  exports: [],
  providers: [TeamsService, LigaClubsFacade]
})
export class LigaClubsModule {
  static forRoot(): ModuleWithProviders<LigaClubsModule> {
    return {
      ngModule: LigaClubsModule,
      providers: []
    }
  }
 }
