import {
  type AuthProvider as _AuthProvider,
  signInWithPopup,
  signOut,
  type User as FUser,
  type UserCredential,
} from "firebase/auth";
import {auth} from "@/config/firebase.ts";
import {User} from "@/services/api/gen";
import {SecurityProvider} from "@/services/api";
import {AxiosResponse} from "axios";

/**
 * such as: GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider from **firebase.auth**
 */
export type ProviderCtor = {
  new (): _AuthProvider;
};

export interface AuthProvider {
  signInWithProvider(providerCtor: ProviderCtor): Promise<AxiosResponse<User>>;

  signUpWithProvider(
    providerCtor: ProviderCtor,
    payload: User
  ): Promise<AxiosResponse<User>>;

  logOut(): Promise<void>;

  getCurrentUser(): Promise<FUser | null>;
}

/**
 * IIFE (Immediately Invoked Function Expression) that creates a **AuthProvider** singleton
 */
export const AuthProvider = new (class Provider implements AuthProvider {
  private static AUTH_ID_TOKEN_KEY = "auth:id_token";

  async signInWithProvider(
    providerCtor: ProviderCtor
  ): Promise<AxiosResponse<User>> {
    const credential = await this._initializeProviderAuth(providerCtor);
    return this.signIn(credential);
  }

  async signUpWithProvider(
    providerCtor: ProviderCtor,
    payload: User
  ): Promise<AxiosResponse<User>> {
    const credential = await this._initializeProviderAuth(providerCtor);
    return this.signUp(payload, credential);
  }

  logOut(): Promise<void> {
    return signOut(auth);
  }

  getCurrentUser(): Promise<FUser | null> {
    return new Promise((resolve) => {
      const unsub = auth.onAuthStateChanged((user) => {
        unsub();
        resolve(user);
      });
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private signIn(_credential: UserCredential): Promise<AxiosResponse<User>> {
    return SecurityProvider.signIn();
  }

  private signUp(
    user: User,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _credential: UserCredential
  ): Promise<AxiosResponse<User>> {
    return SecurityProvider.signUp(user);
  }

  private async _initializeProviderAuth(
    providerCtor: ProviderCtor
  ): Promise<UserCredential> {
    const credential = await signInWithPopup(auth, new providerCtor());
    this._cacheIdToken(await credential.user.getIdToken());
    return credential;
  }

  private _cacheIdToken(idToken: string) {
    return localStorage.setItem(Provider.AUTH_ID_TOKEN_KEY, idToken);
  }
})();
