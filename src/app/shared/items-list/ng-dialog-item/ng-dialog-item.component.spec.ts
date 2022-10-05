
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { CurrencyPipe } from '../../../_pipes/currency.pipe';
import { NgDialogItemComponent } from "./ng-dialog-item.component";

describe("NgDialogItemComponent", () => {
  let component: NgDialogItemComponent;
  let fixture: ComponentFixture<NgDialogItemComponent>;

  const PlayersDataStub = {
    avg: 1,
    clause: 1,
    fav: 1,
    id_competition: 1,
    id_comunio: 1,
    id_team: 1,
    id_uc: 1,
    last_modified: "lastModified",
    match_info: {},
    name: "name",
    picture: "picture",
    points: 1,
    position: 1,
    prev_value: 1,
    shield: 1,
    status: "status",
    streak: {},
    ts_pic: 1,
    value: 1,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgDialogItemComponent, CurrencyPipe],
      imports: [MatDialogModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: PlayersDataStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDialogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
