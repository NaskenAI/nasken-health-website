/// <reference types="vite/client" />

declare global {
  interface Window {
    /** Injected by the cookie-consent script; absent until it loads. */
    revisitConsent?: () => void;
  }
}

export {};
