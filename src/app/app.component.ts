import { Component, HostListener } from '@angular/core';
import * as AOS from 'aos'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'mini-project-2';
  ngOnInit(): void {
    AOS.init();
  }
}
