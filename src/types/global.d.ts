/// <reference types="jest" />
/// <reference types="jest-environment-puppeteer" />
/// <reference types="expect-puppeteer" />

declare namespace NodeJS {
  interface Global {
    page: import('puppeteer').Page;
    browser: import('puppeteer').Browser;
    context: import('puppeteer').BrowserContext;
  }
}

declare module 'expect-puppeteer' {
  interface Matchers<R> {
    toMatch: (selector: string) => Promise<R>;
    toMatchElement: (selector: string, options?: { text?: string; visible?: boolean }) => Promise<R>;
    toClick: (selector: string, options?: { text?: string; button?: 'left' | 'right' | 'middle' }) => Promise<R>;
    toSelect: (selector: string, valueOrText: string) => Promise<R>;
    toUploadFile: (selector: string, filePath: string) => Promise<R>;
    toFill: (selector: string, value: string) => Promise<R>;
  }
}

// Extend global environment with Puppeteer
declare global {
  const page: import('puppeteer').Page;
  const browser: import('puppeteer').Browser;
  const context: import('puppeteer').BrowserContext;
  
  namespace jest {
    interface Matchers<R> {
      toMatch: (selector: string) => Promise<R>;
      toMatchElement: (selector: string, options?: { text?: string; visible?: boolean }) => Promise<R>;
      toClick: (selector: string, options?: { text?: string; button?: 'left' | 'right' | 'middle' }) => Promise<R>;
      toSelect: (selector: string, valueOrText: string) => Promise<R>;
      toUploadFile: (selector: string, filePath: string) => Promise<R>;
      toFill: (selector: string, value: string) => Promise<R>;
    }
  }
}

export {};