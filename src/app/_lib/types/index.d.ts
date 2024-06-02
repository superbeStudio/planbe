export {};

declare global {
  //FIXME: 추후 정해지면 수정
  type APIData<T> = {
    data: T;
    status: number;
    message?: string;
    path?: string;
    timestamp?: string;
    error?: string;
  };
}
