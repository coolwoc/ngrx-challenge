import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";
import { ItemsListComponent } from "./items-list.component";
import { NgDialogItemComponent } from "./ng-dialog-item/ng-dialog-item.component";
import { CurrencyPipe } from '../../_pipes/currency.pipe';

@NgModule({
  declarations: [ItemsListComponent, NgDialogItemComponent, CurrencyPipe],
  imports: [CommonModule, MatDialogModule],
  exports: [ItemsListComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ItemsListModule {}
