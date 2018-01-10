import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'guides-component',
  templateUrl: './guides.component.html'
})
export class GuidesComponent {
    route: string;
    
    constructor(private router: Router) { }
    
    ngOnInit(): void {
        this.route = this.router.url;
    }
}