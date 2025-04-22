import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  selectedExperience: string | null = null;

  desktopImages: string[] = [
    'homepage.jpg',
    'DFutsal.png',
    'DFutsalBook.png',
    'DContact.png',
    'DAbout.png',
    'DLogin.png',
    'DRegister.png',
    'DAdminDashboard.png',
    'DAcceptorDeny.png',
    'DAddFutsalCourts.png'
  ];
  mobileImages: string[] = [
    'Home.png',
    'notification.png',
    'boookingpage.png',
    'bookedpage.png',
    'profilepage.png',
    'loginpage.png',
    'signup.png',
    'admindashboard.png',
    'managebooking.png',
    'sendfutsal.png',
    'sendNotification.png'
  ];
  apiImages: string[] = [
    'API1.png',
    'API2.png',
    'API3.png'
    
  ];

  selectExperience(type: string) {
    this.selectedExperience = type;
  }

  scrollSlider(direction: 'left' | 'right') {
    const slider = document.querySelector('.slider') as HTMLElement;
    if (slider) {
      const scrollAmount = 220;
      slider.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  }
}