
export const LINKEDIN_CONFIG = {
  CLIENT_ID: process.env.LINKEDIN_CLIENT_ID || '',
  CLIENT_SECRET: process.env.LINKEDIN_CLIENT_SECRET || '',
  REDIRECT_URI: process.env.LINKEDIN_REDIRECT_URI || 'http://localhost:3000/api/auth/linkedin/callback',
  
  SCOPES: [
    'openid',
    'profile'
  ],
  
  AUTHORIZATION_URL: 'https://www.linkedin.com/oauth/v2/authorization',
  TOKEN_URL: 'https://www.linkedin.com/oauth/v2/accessToken',
  PROFILE_URL: 'https://api.linkedin.com/v2/userinfo'  
};

export interface LinkedInTokenResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export interface LinkedInOpenIDProfile {
  sub: string;           
  name: string;          
  given_name: string;    
  family_name: string;   
  picture?: string;      
  email?: string;        
  locale?: string;       
}

export function buildLinkedInAuthUrl(state?: string): string {
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: LINKEDIN_CONFIG.CLIENT_ID,
    redirect_uri: LINKEDIN_CONFIG.REDIRECT_URI,
    scope: LINKEDIN_CONFIG.SCOPES.join(' '),
    ...(state && { state })
  });
  
  return `${LINKEDIN_CONFIG.AUTHORIZATION_URL}?${params.toString()}`;
}