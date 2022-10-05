import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Player } from "../../../liga-clubs/_interfaces/Player";

@Component({
  selector: "app-ng-dialog-item",
  templateUrl: "./ng-dialog-item.component.html",
  styleUrls: ["./ng-dialog-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgDialogItemComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Player) {}

  ngOnInit() {}
}
