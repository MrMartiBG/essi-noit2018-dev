import { Component } from '@angular/core';
import { Hero }    from '../hero';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  submitted = false;
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '');
  }
}
