import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { initFlowbite} from 'flowbite';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'AngularSegundo03';

  ngOnInit(): void {
    initFlowbite();
  }
}
