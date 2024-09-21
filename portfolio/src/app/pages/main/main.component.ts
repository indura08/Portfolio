import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import 'aos/dist/aos.css';
import * as AOS from 'aos';

@Component({
  selector: 'main',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  ngOnInit() {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false,      // Animation will happen only once when scrolling down
      offset: 200,     // Distance in pixels to trigger the animation
      easing: 'ease-in-out'
    });
  }
}
