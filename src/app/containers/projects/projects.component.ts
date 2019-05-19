import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {

  state: any = {
    projects: [
      {
        categories: ['personal'],
        title: 'MERN Image Gallery',
        subtitle: '2017-05 | Personal',
        imageLink: 'assets/images/profile-1.jpg',
        description: 'An Image gallery application with basic CRUD functionality built for an earlier version of this site. The original idea behind this project was to have a tool that would automatically produce compressed and resized versions of an uploaded image for desktop, mobile, and tablet use.',
        link: 'github.com'
      },
      {
        categories: ['hackathon'],
        title: 'Hack the North Simulator',
        subtitle: '2018-10 | Hackathon',
        imageLink: 'assets/images/profile-1.jpg',
        caption: 'Hack the North Ubisoft Prize Winner',
        description: 'A top down 2d game written in C++ with a game engine provided by Ubisoft, the game allowed the player to interact with various elements of the hackathon in an attempt to convey the mad scramble of many hackathons with the limited time available.',
        link: 'devpost.com'
      },
      {
        categories: ['personal'],
        title: 'MERN Image Gallery',
        subtitle: '2017-05 | Personal',
        imageLink: 'assets/images/profile-1.jpg',
        description: 'An Image gallery application with basic CRUD functionality built for an earlier version of this site. The original idea behind this project was to have a tool that would automatically produce compressed and resized versions of an uploaded image for desktop, mobile, and tablet use.',
        link: 'github.com'
      },
      {
        categories: ['personal'],
        title: 'MERN Image Gallery',
        subtitle: '2017-05 | Personal',
        imageLink: 'assets/images/profile-1.jpg',
        description: 'An Image gallery application with basic CRUD functionality built for an earlier version of this site. The original idea behind this project was to have a tool that would automatically produce compressed and resized versions of an uploaded image for desktop, mobile, and tablet use.',
        link: 'github.com'
      },
      {
        categories: ['personal'],
        title: 'MERN Image Gallery',
        subtitle: '2017-05 | Personal',
        imageLink: 'assets/images/profile-1.jpg',
        description: 'An Image gallery application with basic CRUD functionality built for an earlier version of this site. The original idea behind this project was to have a tool that would automatically produce compressed and resized versions of an uploaded image for desktop, mobile, and tablet use.',
        link: 'github.com'
      }
    ],
    selectedProjects: []
  }

  constructor() { }

  ngOnInit() {
    this.state.selectedProjects = this.state.projects;
  }

  filterCategory(category: string) {
    if(category === 'all') {
      this.state.selectedProjects = this.state.projects;
    } else {
      this.state.selectedProjects = this.state.projects.filter(
        project => project.categories.indexOf(category) !== -1
      )
    }
  }

}
