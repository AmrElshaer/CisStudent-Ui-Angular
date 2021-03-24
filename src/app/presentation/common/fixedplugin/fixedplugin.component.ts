import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixedplugin',
  templateUrl: './fixedplugin.component.html',
  styleUrls: ['./fixedplugin.component.css']
})
export class FixedpluginComponent implements OnInit {

  public sidebarColor = 'white';
  public sidebarActiveColor = 'danger';

  public state = true;

  changeSidebarColor(color) {
    let sidebar =  document.querySelector('.sidebar') as HTMLElement;

    this.sidebarColor = color;
    if (sidebar != undefined) {
        sidebar.setAttribute('data-color', color);
    }
  }
  changeSidebarActiveColor(color) {
    let sidebar =  document.querySelector('.sidebar') as HTMLElement;
    this.sidebarActiveColor = color;
    if (sidebar != undefined) {
        sidebar.setAttribute('data-active-color', color);
    }
  }

  ngOnInit(): void {
  }

}
