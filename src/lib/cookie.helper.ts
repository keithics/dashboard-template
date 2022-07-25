import Cookies from 'js-cookie';
import { persistor } from 'rtk/store';
const cookieName = 'token';
export function getToken(): string | undefined {
  return Cookies.get(cookieName);
}

export function setCookieToken(token: string) {
  Cookies.set(cookieName, token, { expires: 1, secure: true, sameSite: 'strict' });
}

export function clearAllData() {
  Cookies.remove(cookieName);
  persistor.pause();
  persistor.flush().then(() => {
    return persistor.purge();
  });
}
