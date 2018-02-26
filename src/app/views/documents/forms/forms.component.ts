import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/models/user.class';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  public user: User = new User();
  constructor() { }

  ngOnInit() {
  }

}
