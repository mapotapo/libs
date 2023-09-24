import {UserType} from "../enums/userEnums";

export type User = {
  id: string,
  avatar?: string,
  type: UserType,
  name: string,
  email: string,
  password: string,
  recoverPasswordToken?: string | null,
  registrationDate: Date
};
