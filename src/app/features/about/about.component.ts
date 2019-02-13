import { Component, OnInit } from '@angular/core';
import {AboutData} from '../../models/app.constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutData = AboutData;

  constructor() { }

  ngOnInit() {
  }

}
