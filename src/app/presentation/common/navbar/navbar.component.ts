import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router} from '@angular/router';
import { ROUTES } from '../../sidebar/sidebar.component';
import { Location} from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private listTitles: any[];
  location: Location;
  private nativeElement: Node;
  private toggleButton;
  private sidebarVisible: boolean;

  public isCollapsed = true;
  @ViewChild('navbar-cmp', {static: false}) button;

  constructor(location: Location, private renderer: Renderer2, private element: ElementRef, private router: Router) {
      this.location = location;
      this.nativeElement = element.nativeElement;
      this.sidebarVisible = false;
  }

  ngOnInit() {
      this.listTitles = ROUTES.filter(listTitle => listTitle);
      let navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
      this.router.events.subscribe((event) => {
        this.sidebarClose();
     });
  }
  sidebarToggle() {
      if (this.sidebarVisible === false) {
          this.sidebarOpen();
      } else {
          this.sidebarClose();
      }
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        const mainPanel =   document.getElementsByClassName('main-panel')[0] as HTMLElement;
        setTimeout(function() {
            toggleButton.classList.add('toggled');
        }, 500);

        html.classList.add('nav-open');
        if (window.innerWidth < 991) {
          mainPanel.style.position = 'fixed';
        }
        this.sidebarVisible = true;
    }
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        const mainPanel =   document.getElementsByClassName('main-panel')[0] as HTMLElement;
        if (window.innerWidth < 991) {
          setTimeout(function() {
            mainPanel.style.position = '';
          }, 500);
        }
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    }
    collapse() {
      this.isCollapsed = !this.isCollapsed;
      const navbar = document.getElementsByTagName('nav')[0];
      console.log(navbar);
      if (!this.isCollapsed) {
        navbar.classList.remove('navbar-transparent');
        navbar.classList.add('bg-white');
      } else {
        navbar.classList.add('navbar-transparent');
        navbar.classList.remove('bg-white');
      }

    }

}
