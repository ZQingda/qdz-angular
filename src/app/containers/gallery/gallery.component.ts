import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {

  state: any = {
    albums: [
      {
        name: 'Mortar',
        date: '2019 - 04 - 13',
        images: [
          {
            src: 'assets/images/20190413-1/DSCF2257.jpg',
            alt: 'Industrial buildings against sky, power lines above'
          },
          {
            src: 'assets/images/20190413-1/DSCF2262.jpg',
            alt: 'Grid-like layout of apartment windows in orange brick'
          },
          {
            src: 'assets/images/20190413-1/DSCF2322.jpg',
            alt: 'Storefront at a street corner'
          },
          {
            src: 'assets/images/20190413-1/DSCF2367.jpg',
            alt: 'Stair-like set of apartments in the distance, train tracks in foreground'
          }
        ]
      },
      {
        name: 'Midnight Oil',
        date: '2019 - 04 - 13',
        images: [
          {
            src: 'assets/images/20190413-2/DSCF2468.jpg',
            alt: 'Revolving door at hotel entrance'
          },
          {
            src: 'assets/images/20190413-2/DSCF2472.jpg',
            alt: 'Headlights and traffic lights on right reflect off brick wall on left'
          },
          {
            src: 'assets/images/20190413-2/DSCF2474.jpg',
            alt: 'CN tower in purple light between two condos'
          },
          {
            src: 'assets/images/20190413-2/DSCF2480.jpg',
            alt: 'Glass facade across two floors, orange lighting behind'
          },
          {
            src: 'assets/images/20190413-2/DSCF2511.jpg',
            alt: 'Office building, various floors with lights on and off'
          }
        ]
      }
    ],
    selectedAlbum: {}
  }

  constructor() { }

  ngOnInit() {
  }

  setActiveAlbum(name: string) {
    this.state.selectedAlbum = this.state.albums.find(album => album.name === name);
  }

}
