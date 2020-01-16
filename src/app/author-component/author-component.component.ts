import { Component, Input } from '@angular/core';

function calculate_age(dob) { 
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms); 

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}
// methode prof : 
private calculate_age(date: string): void{
  let currentDate = Date.now(); // timestamp en milliseconde
  let birdthDate = (new Date('1991-01-16')).getTime(); //  en timestamp 
  let timeDiff = currentDate _ birthDate;
  let age = (new Date(timeDiff)).getFullYear() - 1970;
  this.user.age = age;
}

@Component({
  selector: 'app-author-component',
  templateUrl: './author-component.component.html',
  styleUrls: ['./author-component.component.scss']
})
export class AuthorComponentComponent{
 @Input() user;

  }
