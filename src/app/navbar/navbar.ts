import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isScrolled = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    //this.isScrolled = window.scrollY < 0;
    if (window.scrollY > 0) {
      this.isScrolled = false;
      console.log(this.isScrolled);
    } else {
      this.isScrolled = true;
      console.log(this.isScrolled);
    }
  }
}
