import { Component, OnInit } from '@angular/core';
import {Links} from '../../models/app.constants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  links = Links;

  constructor() { }

  ngOnInit() {
  }

}
