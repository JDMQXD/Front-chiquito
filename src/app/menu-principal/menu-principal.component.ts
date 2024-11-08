import { CommonModule } from '@angular/common';

import { Component, inject } from '@angular/core';

import { Router } from '@angular/router';
import { AuthGoogleService } from '../service/auth-google.service';



const MODULES = [CommonModule];
@Component({

  selector: 'app-menu-principal',
  standalone: true,
  imports: [MODULES],
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss'],

})

export class MenuPrincipalComponent {

  private authService = inject(AuthGoogleService);
  private router = inject(Router);
  profile = this.authService.profile;

  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
