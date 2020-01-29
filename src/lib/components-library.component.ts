import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ComponentsLibrary',
  template: `
    <p>
      components-library works!git 
    </p>
    <lib-footer></lib-footer>
    <p>aaaaaaaa</p>
  `,
  styles: []
})
export class ComponentsLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
