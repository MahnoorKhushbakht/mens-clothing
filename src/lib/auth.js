import { SignJWT,jwtVerify } from 'jose';
import { cookies } from 'next/headers'

const JWT_SECRET = new TextEncoder().encode(process.env.NEXT_PUBLIC_API_JWT);
const JWT_COOKIE = 'sessionToken';
const JWT_DURATION = 14 * 24 * 60 * 60 * 1000; // 2 weeks

export async function setSessionCookie(user) {
    const expirationTime = new Date(Date.now() + JWT_DURATION);
    const sessionToken = await new SignJWT(user)
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime(expirationTime)
      .sign(JWT_SECRET);
      cookies().set(JWT_COOKIE, sessionToken, {
        expires: expirationTime,
        httpOnly: true,
        sameSite: 'lax',
      });
  }

  export function deleteSessionCookie() {
    cookies().delete(JWT_COOKIE);
  }

 export async function getUserFromSession() {
    const sessionToken = cookies().get(JWT_COOKIE)?.value;
    if (sessionToken) {
      try {
      const { payload } = await jwtVerify(sessionToken, JWT_SECRET);
        return payload;
     
      } catch (error) {
        console.warn('Invalid JWT', error);
      }
    }
  }