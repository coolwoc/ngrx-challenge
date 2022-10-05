import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialogModule, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { ItemsListComponent } from "./items-list.component";

describe("ItemsListComponent", () => {
  let component: ItemsListComponent;
  let fixture: ComponentFixture<ItemsListComponent>;

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
    picture: "piecture",
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
      declarations: [],
      imports: [MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { myData: PlayersDataStub } },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // it("onclick, should emit value", () => {
  //   spyOn(component.selectedItem, "emit");
  //   const item = {};
  //   component.itemSelected({ stopPropagation: () => {} } as MouseEvent);
  //   expect(component.itemSelected).toHaveBeenCalledWith({});
  // });
});
