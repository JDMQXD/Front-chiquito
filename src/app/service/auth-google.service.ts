import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../auth-config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthGoogleService {
  private oAuthService = inject(OAuthService);
  private router = inject(Router);
  private http = inject(HttpClient);
  profile = signal<any>(null);

  private apiUrl = 'http://localhost:8080/api';
  constructor() {
    this.initConfiguration();
  }

  private initConfiguration() {
    this.oAuthService.configure(authConfig);
    this.oAuthService.setupAutomaticSilentRefresh();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.oAuthService.hasValidIdToken()) {
        this.profile.set(this.oAuthService.getIdentityClaims());
        // Validar token con el backend
        this.validateTokenWithBackend();
        this.router.navigate(['principal']);
      }
    });
  }

  private validateTokenWithBackend() {
    const token = this.oAuthService.getIdToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.post(`${this.apiUrl}/auth/validate`, {}, { headers })
      .subscribe({
        next: (response: any) => {
          // Guardar el token JWT del backend si es necesario
          localStorage.setItem('jwt_token', response.token);
        },
        error: (error) => {
          console.error('Error validando token:', error);
          this.logout();
        }
      });
  }

  getAccessToken(): string {
    return this.oAuthService.getIdToken();
  }

  login() {
    this.oAuthService.initImplicitFlow();
  }

  logout() {
    this.oAuthService.revokeTokenAndLogout();
    this.oAuthService.logOut();
    this.profile.set(null);
  }

  getProfile() {
    return this.profile();
  }
}
