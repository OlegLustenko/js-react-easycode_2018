import {Component, Injectable, Input} from "@angular/core";

@Component({
  selector: 'my-list',
  templateUrl: './list.component.html'
})
export class MyList {
  @Input() users: Array<any>;
}
