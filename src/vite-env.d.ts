/// <reference types="vite/client" />

declare namespace Request {
  interface Error {
    code: number;
    message: string;
  }
}
