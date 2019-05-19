import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.sass']
})
export class LightboxComponent implements OnInit {

  @Input() album: any = []

  constructor() { }

  ngOnInit() {
  }

}
