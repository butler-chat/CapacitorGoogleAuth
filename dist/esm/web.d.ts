import { WebPlugin } from '@capacitor/core';
import { GoogleAuthPlugin } from './definitions';
import { Authentication } from './user';
export declare class GoogleAuthWeb extends WebPlugin implements GoogleAuthPlugin {
    gapiLoaded: Promise<void>;
    readonly webConfigured: boolean;
    constructor();
    initialize(): void;
    platformJsLoaded(): void;
    signIn(): Promise<any>;
    refresh(): Promise<Authentication>;
    signOut(): Promise<any>;
    private addUserChangeListener;
    private getUserFrom;
}
declare const GoogleAuth: GoogleAuthWeb;
export { GoogleAuth };
