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
        categories: ['hackathon'],
        title: 'Search and Protect',
        subtitle: '2018-02-04 | Hackathon',
        caption: 'QHacks 2018 Major League Hacking Winner',
        imageLink: 'assets/images/projects/search-and-protect.jpg',
        description: 'Using twitter\'s public API, this tool collects historical data from a person\'s tweets and feeds it through IBM Watson\'s sentiment analysis API to search for signs of depression or in need of mental health assistance. The front end allows a medical professional to choose accounts to analyze, and to contact those people if necessary.',
        link: 'https://devpost.com/software/qhacks-2018'
      },
      {
        categories: ['hackathon'],
        title: 'Hack the North Simulator',
        subtitle: '2018-09-16 | Hackathon',
        imageLink: 'assets/images/projects/hack-the-north-simulator.jpg',
        caption: 'Hack the North Ubisoft Prize Winner',
        description: 'A top down 2d game written in C++ with a game engine provided by Ubisoft, the game allowed the player to interact with various elements of the hackathon in an attempt to convey the mad scramble of many hackathons with the limited time available.',
        link: 'https://devpost.com/software/hack-the-north-2018-9oexmy'
      },
      {
        categories: ['personal'],
        title: 'Qingda Zou\'s personal site',
        subtitle: '2019-05-19 | Personal',
        caption: 'Winner of Best Site for Qingda Zou 2019',
        imageLink: 'assets/images/projects/qingdazou-angular.png',
        description: 'The site you\'re looking at right now! I had a lot of fun building this, being the first full Angular site I\'ve built on my own. I hope you enjoy your time here.',
        link: 'https://github.com/ZQingda/qdz-angular'
      },
      {
        categories: ['personal'],
        title: 'MERN Image Gallery',
        subtitle: '2017-10-22 | Personal',
        imageLink: 'assets/images/projects/mern-image-gallery.jpg',
        description: 'An Image gallery application with basic CRUD functionality built for an earlier version of this site. The original idea behind this project was to have a tool that would automatically produce compressed and resized versions of an uploaded image for desktop, mobile, and tablet use.',
        link: 'https://github.com/ZQingda/mern-album-gallery'
      },
      {
        categories: ['hackathon'],
        title: 'Activity Map',
        subtitle: '2018-11-25 | Hackathon',
        imageLink: 'assets/images/projects/activity-map.jpg',
        description: 'A Web dashboard that was fed information from any number of arduinos, each equipped with a variety of sensors. Each arduino would be placed in a room, and the dashboard would display a floormap with live data visualization for temperature, light, and noise. Designed to help workers in open concept offices, or hackathon goers, to find rooms to work and hold meetings in.',
        link: 'https://devpost.com/software/exam-id'
      },
      {
        categories: ['hackathon'],
        title: 'Health and Nutrition Assistant',
        subtitle: '2017-02-05 | Hackathon',
        imageLink: 'assets/images/projects/talcumpowder.jpg',
        description: 'A Facebook messenger bot run on a flask backend designed for medical professionals to easily set alerts that alert patients of their medication schedule, as well as to facilitate enquiries between the two.',
        link: 'https://devpost.com/software/talcumpowder'
      },
      {
        categories: ['hackathon'],
        title: 'Alexa: My Personal Therapist',
        subtitle: '2017-01-08 | Hackathon',
        imageLink: 'assets/images/projects/alexa-therapist.jpg',
        description: 'Using Alexa\'s API for token parsing of voice commands, this is an Alexa Skill (bot) that is designed to listen to user grievances and provide motivational support. Built with Node.js, it was only after the hackathon ended that we learned from Amazon representatives the fact that Alexa skills were not meant to have full conversational capability.',
        link: 'https://devpost.com/software/alexa-my-personal-therapist'
      },
      
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
