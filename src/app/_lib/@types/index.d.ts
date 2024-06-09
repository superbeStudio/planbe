export {};

declare global {
  type APIData<T> = {
    data: T;
    status: number;
    message?: string;
    path?: string;
    timestamp?: string;
    error?: string;
  };
}
