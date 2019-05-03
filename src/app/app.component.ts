import { Component, ViewChild } from '@angular/core';
import { MatTable, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('listGuestTablet') listGuestTablet: MatTable<any>

  constructor(
    private _Snack: MatSnackBar
  ) {
    this.selectBoard = null;
    this.guestColumns = ['position', 'name', 'food', 'positiont'];
    this.guest = { name: '', food: '', positiont: 0 };
    this.listGuest = [];
  }

  selectBoard: number;
  guestColumns: Array<string>;
  listGuest: Array<Guest>;
  guest: Guest;

  addGuest() {
    if (this.selectBoard !== null) {
      this.guest.positiont = this.selectBoard
      let parse = JSON.stringify(this.guest)
      this.listGuest.push(JSON.parse(parse));
      this.selectBoard = null;
      this.listGuestTablet.renderRows();
    } else {
      this._Snack.open('choose a position','Ok')
    }
  }

}

export interface Guest {
  name: string,
  food: string,
  positiont: number
}
