import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, HeaderComponent, FooterComponent ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
