import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.sass']
})
export class LightboxComponent {

  @Input() album: any = []

  lightbox: any = {
    image: {},
    index: 0,
    count: 0,
    isDisplayed: false,
    isVisible: false
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.album.currentValue.images) {
      this.lightbox.count = changes.album.currentValue.images.length;
    }
  }

  selectImage(index: number) {
    this.lightbox.image = {};
    this.lightbox.image = this.album.images[index];
    this.lightbox.index = index;
    this.show();
  }

  show() {
    this.lightbox.isDisplayed = true;
    this.lightbox.isVisible = true;
  }

  hide() {
    this.lightbox.isVisible = false;
    setTimeout(() => this.lightbox.isDisplayed = false, 80);
  }

}
