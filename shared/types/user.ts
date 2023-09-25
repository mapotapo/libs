import {UserStatus, UserType} from "../enums/userEnums";

export type User = {
  id: string,
  avatar?: string | null,
  type: UserType,
  status: UserStatus,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  recoverPasswordToken?: string | null,
  registrationDate: Date
};
