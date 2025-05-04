export class AuthService {
  private static LOCAL_STORAGE_KEY_LOGIN = 'login';
  private static LOCAL_STORAGE_KEY_PASSWORD = 'password';

  static saveCredentials(login: string, password: string): void {
    localStorage.setItem(this.LOCAL_STORAGE_KEY_LOGIN, login);
    localStorage.setItem(this.LOCAL_STORAGE_KEY_PASSWORD, password);
  }

  static clearCredentials(): void {
    localStorage.removeItem(this.LOCAL_STORAGE_KEY_LOGIN);
    localStorage.removeItem(this.LOCAL_STORAGE_KEY_PASSWORD);
  }

  static getStoredCredentials(): { login: string | null, password: string | null } {
    const login = localStorage.getItem(this.LOCAL_STORAGE_KEY_LOGIN);
    const password = localStorage.getItem(this.LOCAL_STORAGE_KEY_PASSWORD);
    return { login, password };
  }

  static autoLogin(): boolean {
    const { login, password } = this.getStoredCredentials();
    return login !== null && password !== null;
  }
}
