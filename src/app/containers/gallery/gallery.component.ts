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
      },
      {
        name: 'Cyanine',
        date: '2018 - 05 - 14',
        images: [
          {
            src: 'assets/images/20180514-1/IMG_9468.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20180514-1/IMG_9472.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20180514-1/IMG_9484.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20180514-1/IMG_9487.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20180514-1/IMG_9496.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20180514-1/IMG_9500.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20180514-1/IMG_9506.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20180514-1/IMG_9514-2.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20180514-1/IMG_9516.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20180514-1/IMG_9524.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20180514-1/IMG_9527.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20180514-1/IMG_9535.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20180514-1/IMG_9551.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20180514-1/IMG_9560.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20180514-1/IMG_9563.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20180514-1/IMG_9573.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20180514-1/IMG_9575.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20180514-1/IMG_9596.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20180514-1/IMG_9613.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20180514-1/IMG_9631.jpg',
            alt: ''
          }
        ]
      },
      {
        name: 'Toy Town',
        date: '2017 - 08 - 19',
        images: [
          {
            src: 'assets/images/20170819-1/IMG_4204.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20170819-1/IMG_4213.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20170819-1/IMG_4228.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20170819-1/IMG_4232.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20170819-1/IMG_4242.jpg',
            alt: ''
          }
        ]
      },
      {
        name: 'Peninsula',
        date: '2017 - 08 - 16',
        images: [
          {
            src: 'assets/images/20170816-1/IMG_3475.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20170816-1/IMG_3517.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20170816-1/IMG_3603.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20170816-1/IMG_3635.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20170816-1/IMG_3703.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20170816-1/IMG_3717.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20170816-1/IMG_3745.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20170816-1/IMG_3809.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20170816-1/IMG_3826.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20170816-1/IMG_3949.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20170816-1/IMG_3965.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20170816-1/IMG_3971.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20170816-1/IMG_4006.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20170816-1/IMG_4011.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20170816-1/IMG_4017.jpg',
            alt: ''
          },
          {
            src: 'assets/images/20170816-1/IMG_4063.jpg',
            alt: ''
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
