import { AuthConfig } from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {

    issuer: 'https://accounts.google.com',
  
    redirectUri: window.location.origin,
  
    clientId: '51713343027-uba4utbl5boli01060q5dujm5na7bfja.apps.googleusercontent.com',
  
    scope: 'openid profile email',
  
    strictDiscoveryDocumentValidation: false,
  
  };