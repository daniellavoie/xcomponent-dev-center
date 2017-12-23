import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
    route: string;
    
    constructor(private router: Router) { }
    
    ngOnInit(): void {
        this.route = this.router.url;
    }
}

