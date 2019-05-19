import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.sass']
})
export class SidemenuComponent implements OnInit {

  state: any = {
    isDisplayed: false,
    isVisible: false
  }

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.state.isDisplayed = true;
    setTimeout(() => this.state.isVisible = true, 150);
  }

  hide() {
    this.state.isVisible = false;
    setTimeout(() => this.state.isDisplayed = false, 150);
  }

  toggleHamburger() {
    if(this.state.isDisplayed) {
      this.hide();
    } else {
      this.show();
    }
  }
}
