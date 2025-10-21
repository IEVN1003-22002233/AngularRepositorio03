import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { initFlowbite} from 'flowbite';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { TempComponent as TempComponent } from "./tem/temp/temp.component";

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, NavbarComponent, RouterOutlet, TempComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  ngOnInit(): void {
    initFlowbite();
  }
}
