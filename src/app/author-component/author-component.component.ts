import { Component } from '@angular/core';

export class User {
  nom: string = "Jean";
  prenom: string = "Deltour";
  birth = "1992-05-26";
  avatar = "img";  
}
function getAge(date) { 
  var diff = Date.now() - date.getTime();
  var age = new Date(diff); 
  return Math.abs(age.getUTCFullYear() - 1970);
}

@Component({
  selector: 'app-author-component',
  templateUrl: './author-component.component.html',
  styleUrls: ['./author-component.component.scss']
})
export class AuthorComponentComponent{

}
