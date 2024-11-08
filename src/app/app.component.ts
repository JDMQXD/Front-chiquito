import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterfazComunComponent } from "./interfaz-comun/interfaz-comun.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InterfazComunComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fron_ucobet';
}
