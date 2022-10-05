import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
} from "@angular/core";
import { EventEmitter } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Team } from "../../liga-clubs/_interfaces/Team";
import { NgDialogItemComponent } from "./ng-dialog-item/ng-dialog-item.component";

@Component({
  selector: "app-items-list",
  templateUrl: "./items-list.component.html",
  styleUrls: ["./items-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsListComponent implements OnInit {
  @Input() data!: any[];
  @Input() messageError!: string;
  @Input() isLoading: boolean;
  @Input() title: string;
  @Output() selectedItem: EventEmitter<Team> = new EventEmitter<Team>();

  constructor(private matDialog: MatDialog) {}

  ngOnInit() {}

  itemSelected(item: any) {
    this.selectedItem.emit(item);
  }

  openDialog(item) {
    this.matDialog.open(NgDialogItemComponent, {
      width      : '100%',
      maxWidth   : '250px',
      height     : 'auto',
      panelClass : 'ng-dialog-theme-item-list',
      data: item,
    });
  }
}
