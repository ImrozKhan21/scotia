import {Component, OnInit} from '@angular/core';
import {Links} from '../../models/app.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links = Links;

  constructor() {
  }

  ngOnInit() {
  }

}
