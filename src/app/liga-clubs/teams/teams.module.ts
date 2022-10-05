import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ItemsListModule } from '../../shared/items-list/items-list.module';
import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';

@NgModule({
    declarations: [TeamsComponent],
    imports: [
        CommonModule,
        TeamsRoutingModule,
        ItemsListModule
    ],
    exports: [TeamsRoutingModule]
})

export class TeamsModule {}