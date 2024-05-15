export type User = {
  uuid: number;
  email: string;
  password: string;
  nickname: string;
  sex: Gender;
  age: number;
  currencyMain: SystemCurrency;
  modeScreen: SystemColor;
  createDate: string;
  updateDate: string;
};

export enum Gender {
  "F" = "FEMALE",
  "M" = "MALE",
}

export enum SystemColor {
  "L" = "LIGHT",
  "D" = "DARK",
}

export enum SystemCurrency {
  KWD,
  USD,
  AUD,
  CAD,
  EUR,
  JPY,
  CNY,
}
