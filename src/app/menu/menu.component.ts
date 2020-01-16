import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
/** 
 * Le menu peut etre ouvert / fermé
 */

  isCollapsed: boolean = false;

  /** 
   * Le titre apparait au niveau du logo
   */
  @Input() title;
  @Input() color = 'light';

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }

  switchTheme(){
    //on inverse la couleur du theme entre dark et light
    this.color = ('light' === this.color) ? 'dark' : 'light';
  }
}

