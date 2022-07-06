import type { NativeStackScreenProps } from "@react-navigation/native-stack";

// Can't use interface for NativeStackScreenProps because of error. Types is used in documentation.
// See https://reactnavigation.org/docs/typescript

type IRootStackParamList = {
  Authorization: undefined;
  Main: undefined;
  Registration: undefined;
};

type IAuthorizationProps = NativeStackScreenProps<IRootStackParamList, "Authorization">;
type IMainProps = NativeStackScreenProps<IRootStackParamList, "Main">;
type IRegistrationProps = NativeStackScreenProps<IRootStackParamList, "Registration">;

interface IUser {
  id: string;
  login: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

export type { IRootStackParamList, IAuthorizationProps, IMainProps, IRegistrationProps, IUser };
